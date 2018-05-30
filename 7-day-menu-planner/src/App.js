import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { chooseCategory } from './actions';
import RecipeCardsDisplay from './components/RecipeCardsDisplay'

export class App extends Component {
  constructor(props) {
    super();

    
  }

  

  render() {
    if(this.props.recipesIsLoading) {
      return (
        <p className="loading-message">Your Recipes Are Loading</p>
      )
    } else {
      return (
        <div className="App">
          <select 
            onChange={event => this.props.chooseCategory(event.target.value)}
            id='category'>
            <option>SELECT CATEGORY</option>
            <option value='paleo'>Paleo</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='vegan'>Vegan</option>
          </select>
        <RecipeCardsDisplay recipeCards={this.props.recipeCards} />
        </div>
      );
    }
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
