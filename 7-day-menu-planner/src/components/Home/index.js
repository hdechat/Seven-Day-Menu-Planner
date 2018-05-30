import React from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';

const Home = ({ recipeCards, chooseCategory, recipesIsLoading, recipesHasErrored }) => {

  const displayLoadingMessage = () => {
    return recipesIsLoading ?
      <p className="loading-message">Your Recipes Are Loading</p> : null;
  }

  const displayErrorMessage = () => {
    return recipesHasErrored ?
      <p className="error-message">{recipesHasErrored}</p> : null;
  }

    return (
      <div className="App">
        <header>
        </header>
        <select 
          onChange={event => chooseCategory(event.target.value)}
          id='category'>
          <option>SELECT CATEGORY</option>
          <option value='paleo'>Paleo</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
        </select>
        {displayLoadingMessage()}
        {displayErrorMessage()}
        <RecipeCardsDisplay recipeCards={recipeCards} />
      </div>
    );
}

export default Home;
