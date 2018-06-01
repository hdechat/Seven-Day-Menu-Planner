import React from 'react';
import RecipeCardContainer from '../../containers/RecipeCardContainer';
import './index.css';

const RecipeCardsDisplay = ({ recipeCards }) => {
  const cards = recipeCards.map(recipe => {
    return (
      <div className="home-display">
        <RecipeCardContainer key={recipe.title} recipe={recipe} displayAddToMenu={true} />
      </div>
    );
  });
  return (
    <section className="recipe-cards-display">
      {cards}
    </section>
  );
};

export default RecipeCardsDisplay;
