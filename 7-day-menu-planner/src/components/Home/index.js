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

  const displayWelcomeMessage = () => {
    return !recipeCards.length ?
      <p className="welcome-message">Welcome to your easy-peasy seven day meal planner!</p> : null;
  }

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
      <input className='search' type='text' placeholder='Search' />
        {displayLoadingMessage()}
        {displayErrorMessage()}
        {displayWelcomeMessage()}
      <div className="display-cards">
        <RecipeCardsDisplay recipeCards={recipeCards} />
      </div>
    </section>
  );
}

export default Home;
