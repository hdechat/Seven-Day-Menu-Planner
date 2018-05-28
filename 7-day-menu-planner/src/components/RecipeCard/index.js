import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <article>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url}>Click Here to Go To Recipe Page</a>
    </article>
  )
}

export default RecipeCard;