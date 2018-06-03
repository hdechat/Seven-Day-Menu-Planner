import React from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

const Favorites = ({ favorites }) => {
  return (
    <section className="display-favorites">
      <h2>Favorites</h2>
      <RecipeCardsDisplay recipeCards={favorites} />
    </section>
  )
}

export default Favorites;
