import React from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

const Favorites = ({ favorites }) => {
  return (
    <div className="display-favorites">
      <RecipeCardsDisplay recipeCards={favorites} />
    </div>
  )
}

export default Favorites;