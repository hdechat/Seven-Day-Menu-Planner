import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';
import './index.css'

const RecipeCard = ({ recipe, displayAddToMenu }) => {
  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };
  return (
    <article>
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url} target="_blank">{recipe.title}</a>
      {displayInset()}
    </article>
  );
};

export default RecipeCard;
