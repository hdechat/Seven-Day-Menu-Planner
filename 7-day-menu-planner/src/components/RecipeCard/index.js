import React from 'react';
import AddToMenu from '../AddToMenu'

const RecipeCard = ({ recipe }) => {
  return (
    <article>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url}>Click Here to Go To Recipe Page</a>
      <AddToMenu recipe={recipe} />
    </article>
  )
}

export default RecipeCard;