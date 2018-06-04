import React from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

const Home = props => {
  const { 
    recipeCards, 
    chooseCategory, 
    recipesIsLoading, 
    recipesHasErrored } = props;

  const displayLoadingMessage = () => {
    return recipesIsLoading ?
      <p className="loading-message">Your Recipes Are Loading</p> : null;
  };

  const displayErrorMessage = () => {
    return recipesHasErrored ?
      <p className="error-message">{recipesHasErrored}</p> : null;
  };

  return (
    <section className="home">
      <h2>Select Category</h2>
      <div className="select-category">
        <select 
          onChange={event => chooseCategory(event.target.value)}
          id='category'>
          <option>SELECT CATEGORY</option>
          <option value='paleo'>Paleo</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
        </select>
      </div>
        {displayLoadingMessage()}
        {displayErrorMessage()}
      <div className="display-cards">
        <RecipeCardsDisplay recipeCards={recipeCards} />
      </div>
    </section>
  );
}

export default Home;
