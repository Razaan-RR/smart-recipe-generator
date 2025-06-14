import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/SavedRecipes.css';

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/saved-recipes')
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Helper: Detect if a line is a section header (bold, no bullet)
  const isSectionHeader = (line) => {
    const lower = line.toLowerCase();
    return (
      lower === 'ingredients:' ||
      lower === 'instructions:' ||
      lower === 'recipe:' ||
      /^[A-Z][a-zA-Z\s]*$/.test(line) // Recipe name likely: capitalized phrase with no punctuation
    );
  };

  // Helper: Detect if a line is a numbered or bulleted step
  const isStepLine = (line) => {
    return /^(\d+\.\s|-)\s*/.test(line);
  };

  return (
    <div className="saved-container">
      <h1>❤️ Saved Recipes</h1>
      {recipes.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
        recipes.map((r, i) => {
          // Split recipe into trimmed non-empty lines
          const lines = r.recipe
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter((line) => line !== '');

          // Arrays to hold parts for rendering
          const content = [];

          // Temporary array to collect steps until a section header is found
          let stepBuffer = [];

          // Flush buffered steps as a list (ul or ol depending on numbering)
          const flushSteps = () => {
            if (stepBuffer.length === 0) return;

            // Detect if steps are numbered or bulleted
            const numbered = stepBuffer.every((line) => /^\d+\.\s/.test(line));
            if (numbered) {
              content.push(
                <ol key={Math.random()}>
                  {stepBuffer.map((line, idx) => (
                    <li key={idx}>{line.replace(/^\d+\.\s*/, '')}</li>
                  ))}
                </ol>
              );
            } else {
              content.push(
                <ul key={Math.random()}>
                  {stepBuffer.map((line, idx) => (
                    <li key={idx}>{line.replace(/^-\s*/, '')}</li>
                  ))}
                </ul>
              );
            }
            stepBuffer = [];
          };

          lines.forEach((line, idx) => {
            if (isSectionHeader(line)) {
              flushSteps();
              // For recipe name (likely first line), render as h4, others as bold paragraphs
              if (idx === 0) {
                content.push(
                  <h4 key={idx} style={{ fontWeight: 'bold', marginBottom: '6px' }}>
                    {line}
                  </h4>
                );
              } else {
                content.push(
                  <p
                    key={idx}
                    style={{
                      fontWeight: 'bold',
                      marginTop: '10px',
                      marginBottom: '6px',
                      textTransform: 'capitalize',
                    }}
                  >
                    {line}
                  </p>
                );
              }
            } else if (isStepLine(line)) {
              stepBuffer.push(line);
            } else {
              // Plain paragraph line, flush steps first
              flushSteps();
              content.push(
                <p key={idx} style={{ marginBottom: '6px', whiteSpace: 'pre-wrap' }}>
                  {line}
                </p>
              );
            }
          });

          flushSteps(); // flush any remaining steps

          return (
            <div key={i} className="saved-card">
              <h3>🥕 Ingredients</h3>
              <ul>
                {r.ingredients.split(',').map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>

              <h3>👨‍🍳 Instructions</h3>
              <div>{content}</div>
            </div>
          );
        })
      )}
    </div>
  );
}
