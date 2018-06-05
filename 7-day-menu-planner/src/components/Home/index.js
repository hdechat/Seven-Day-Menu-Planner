import React, { Component } from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { userSearch: ''};
  }

  // handleKeyPress = (event) => {
  //   if(event.key === 'Enter') {
  //     this.props.chooseCategory(this.state.userSearch)
  //   }
  // }

  render() {
    const { 
      recipeCards, 
      chooseCategory, 
      recipesIsLoading, 
      recipesHasErrored } = this.props;

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
        <p className="welcome-message">Welcome to your eazy-peazy seven-day meal planner!</p> : null;
    }

    return (
      <section className="home">
        <h2>Find Your Recipe</h2>
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
        <input 
          className='search' 
          type='search'
          placeholder='Search'
          value={this.state.userSearch}
          onChange={event => this.setState({userSearch: event.target.value})}
          onKeyPress={e => e.key === 'Enter' ? chooseCategory(this.state.userSearch) : ''} />
          {displayLoadingMessage()}
          {displayErrorMessage()}
          {displayWelcomeMessage()}
        <div className="display-cards">
          <RecipeCardsDisplay recipeCards={recipeCards} />
        </div>
      </section>
    );
  }
}

export default Home;
