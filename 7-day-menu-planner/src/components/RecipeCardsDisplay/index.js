import React from 'react';
import RecipeCardContainer from '../../containers/RecipeCardContainer';
import './index.css';

const RecipeCardsDisplay = ({ recipeCards }) => {
  const cards = recipeCards.map(recipe => {
    return (
      <div key={recipe.title} className="home-display">
        <RecipeCardContainer recipe={recipe} displayAddToMenu={true} displayLinkText={true}/>
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
