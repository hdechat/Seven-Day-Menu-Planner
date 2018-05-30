import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { chooseCategory } from './actions';
import RecipeCardsDisplay from './components/RecipeCardsDisplay'

export class App extends Component {

  displayLoadingMessage() {
    return this.props.recipesIsLoading ?
      <p className="loading-message">Your Recipes Are Loading</p> : null;
  }

  render() {
    const { recipeCards, chooseCategory } = this.props;
    
    return (
      <div className="App">
        <select 
          onChange={event => chooseCategory(event.target.value)}
          id='category'>
          <option>SELECT CATEGORY</option>
          <option value='paleo'>Paleo</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
        </select>
        {this.displayLoadingMessage()}
      <RecipeCardsDisplay recipeCards={recipeCards} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  recipesIsLoading: state.recipes.recipesIsLoading,
  recipeCards: state.recipes.results
});
export const mapDispatchToProps = dispatch => ({
  chooseCategory: category => dispatch(chooseCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
