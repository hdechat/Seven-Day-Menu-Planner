import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';
import './index.css'
import emptyStar from '../../assets/emptyStar.png';
import yellowStar from '../../assets/yellowStar.png';

export const RecipeCard = props => {
  const { 
    recipe, displayAddToMenu, displayLinkText, toggleFavorites, 
    favorites, addFavoriteToStorage, removeFavoriteFromStorage } = props;
    
  const favorited = favorites.find(fave => fave.title === recipe.title);

  const handleClick = () => {
    toggleFavorites(recipe);
    if(!favorited) {
      addFavoriteToStorage(recipe);
    } else {
      removeFavoriteFromStorage(recipe);
    }
  };

  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };
  
  const displayText = () => {
    return displayLinkText ? 
      <a className="recipe-link" href={recipe.url} target="_blank">{recipe.title}</a> : null;
  };

  return (
    !recipe.title 
    ? <article className="empty-card"></article>
    : <article className="recipe-card">
      <img src={favorited ? yellowStar : emptyStar} 
        alt='star'
        className='star' 
        onClick={handleClick}/>
        <a href={recipe.url} target="_blank"><img src={recipe.image} alt="recipe meal" /></a>
        { displayText() }
      { displayInset() }
    </article>
  );
};

export default RecipeCard;
