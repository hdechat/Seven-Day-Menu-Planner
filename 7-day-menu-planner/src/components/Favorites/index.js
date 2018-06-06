import React from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import PropTypes from 'prop-types';
import './index.css';

const Favorites = ({ favorites }) => {
  return (
    <section className="display-favorites">
      <h2 className="favorites-text">Favorites</h2>
      <RecipeCardsDisplay recipeCards={favorites} />
    </section>
  );
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array
};