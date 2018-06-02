import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';
import './index.css'
import emptyStar from '../../assets/emptyStar.png';
import yellowStar from '../../assets/yellowStar.png';

const RecipeCard = props => {
  const { recipe, displayAddToMenu, toggleFavorites, favorites } = props;
  const favorited = favorites.find(fave => fave.title === recipe.title);

  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };

  return (
    <article>
      <img src={favorited ? yellowStar : emptyStar} 
        alt='star'
        className='star' 
        onClick={() => toggleFavorites(recipe)}/>
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url} target="_blank">{recipe.title}</a>
      { displayInset() }
    </article>
  );
};

export default RecipeCard;
