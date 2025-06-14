import React, { useState } from 'react';
import axios from 'axios';
import './css/RecipeGenerator.css';

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecipe('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/generate-recipe', {
        ingredients,
      });
      setRecipe(response.data.recipe || 'No recipe found.');
    } catch (error) {
      setRecipe('Error generating recipe.');
      console.error(error);
    }

    setLoading(false);
  };

  const handleSave = async () => {
    if (!recipe || !ingredients) return;

    try {
      await axios.post('http://127.0.0.1:8000/api/save-recipe', {
        ingredients,
        recipe,
      });
      alert('Recipe saved!');
    } catch (err) {
      console.error(err);
      alert('Failed to save recipe.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">🍽️ Ready to cook?</h1>

      <form onSubmit={handleSubmit} className="form">
        <textarea
          className="textarea"
          placeholder="Enter ingredients (e.g. egg, onion, salt)"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button className="generate-button" type="submit">
          {loading ? 'Generating...' : 'Get Recipe'}
        </button>
      </form>

      {recipe && (
        <div className="recipe-card">
          <h2>🍲 Recipe</h2>
          <p className="recipe-text">{recipe}</p>
          <button className="save-button" onClick={handleSave}>
            ❤️ Save Recipe
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeGenerator;
