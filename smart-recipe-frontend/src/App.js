import React, { useState } from 'react';
import RecipeGenerator from './components/RecipeGenerator';
import SavedRecipes from './components/SavedRecipes';

import './App.css';

function App() {
  const [page, setPage] = useState('generator');

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="logo">Recipe Book🍳</div>
        <div className="nav-links">
          <button
            onClick={() => setPage('generator')}
            className={page === 'generator' ? 'active' : ''}
          >
            Generate Recipes
          </button>
          <button
            onClick={() => setPage('saved')}
            className={page === 'saved' ? 'active' : ''}
          >
            Saved Recipes
          </button>
        </div>
      </nav>

      <main className="main-content">
        {page === 'generator' ? <RecipeGenerator /> : <SavedRecipes />}
      </main>
    </div>
  );
}

export default App;
