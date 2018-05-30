import React from 'react';
import RecipeCard from '../RecipeCard'

const RecipeCardsDisplay = ({ recipeCards }) => {
  const cards = recipeCards.map(recipe => {
    return (
      <RecipeCard key={recipe.title} recipe={recipe} displayAddToMenu={true} />
    )
  });
  return (
    <div>
     {cards}
    </div>
  )
}

export default RecipeCardsDisplay;

//from App receives mSTP 
//maybe sent a boolen from here to display addToMen