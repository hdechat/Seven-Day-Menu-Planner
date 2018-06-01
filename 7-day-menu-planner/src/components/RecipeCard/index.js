import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';
import './index.css'
import star from '../../assets/star-empty.png';
import yellowStar from '../../assets/yellow-star.png';

const RecipeCard = props => {
  console.log(props)
  const { recipe, displayAddToMenu, toggleFavorites } = props
  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };
  return (
    <article>
      <img src={star} alt='empty star' className='star' onClick={() => toggleFavorites(recipe)}/>    
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url} target="_blank">{recipe.title}</a>
      {displayInset()}
    </article>
  );
};

export default RecipeCard;
