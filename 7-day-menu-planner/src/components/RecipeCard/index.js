import React from 'react';
import AddToMenuContainer from '../../containers/AddToMenuContainer';
import './index.css'
import emptyStar from '../../assets/star-empty.png';
import yellowStar from '../../assets/yellow-star.png';

const RecipeCard = props => {
  const { recipe, displayAddToMenu, toggleFavorites, favorites } = props;
  const favorited = favorites.find(fave => fave.title === recipe.title);

  const displayInset = () => {
    return displayAddToMenu ? 
      <AddToMenuContainer recipe={recipe} /> : null;
  };

  const displayStarToggle = () => favorited ? 
    (<img src={yellowStar} alt='empty star' className='yellow-star' onClick={() => toggleFavorites(recipe)}/>) :
    (<img src={emptyStar} alt='empty star' className='empty-star' onClick={() => toggleFavorites(recipe)}/>);

  return (
    <article>
      { displayStarToggle() }
      <img src={recipe.image} alt="recipe meal" />
      <a href={recipe.url} target="_blank">{recipe.title}</a>
      { displayInset() }
    </article>
  );
};

export default RecipeCard;
