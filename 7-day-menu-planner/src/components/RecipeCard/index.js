import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';

const RecipeCard = ({ recipe, displayAddToMenu }) => {
  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };
  return (
    <article>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url} target="_blank">Open Recipe Page in a new window</a>
      {displayInset()}
    </article>
  );
};

export default RecipeCard;
