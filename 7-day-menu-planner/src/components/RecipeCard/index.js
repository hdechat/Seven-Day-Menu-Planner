import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';
import './index.css'
import emptyStar from '../../assets/emptyStar.png';
import yellowStar from '../../assets/yellowStar.png';

export const RecipeCard = props => {
  const { 
    recipe, displayAddToMenu, toggleFavorites, favorites, 
    addFavoriteToStorage, removeFavoriteFromStorage } = props;
    
  const favorited = favorites.find(fave => fave.title === recipe.title);

  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };

  const handleClick = () => {
    toggleFavorites(recipe);
    if(!favorited) {
      addFavoriteToStorage(recipe);
    } else {
      removeFavoriteFromStorage(recipe);
    }
  };

  return (
    <article className="recipe-card">
      <img src={favorited ? yellowStar : emptyStar} 
        alt='star'
        className='star' 
        onClick={handleClick}/>
       <a href={recipe.url} target="_blank"><img src={recipe.image} alt="recipe meal" /></a>
      <a href={recipe.url} target="_blank">{recipe.title}</a>
      { displayInset() }
    </article>
  );
};

export default RecipeCard;
