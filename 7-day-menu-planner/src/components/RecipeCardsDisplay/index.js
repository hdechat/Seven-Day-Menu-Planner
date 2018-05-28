import React from 'react';
import RecipeCard from '../RecipeCard'

const RecipeCardsDisplay = ({ recipeCards }) => {
  const cards = recipeCards.map(recipe => {
    return (
      <RecipeCard recipe={recipe} />
    )
  });
  return (
    <div>
     {cards}
    </div>
  )
}

export default RecipeCardsDisplay;