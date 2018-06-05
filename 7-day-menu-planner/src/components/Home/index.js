import React, { Component } from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { userSearch: ''};
  }

  handleChange = event => {
    this.setState({ userSearch: event.target.value})
  }

  handleEnterPress = event => {
    event.preventDefault();
    if(event.target.charCode === 13) {
      this.props.chooseCategory(this.state.userSearch);
    }
  }

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
        <h2>Select Category</h2>
        <form>
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
            placeholder='Search'
            value={this.state.userSearch}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterPress} />
        </form>
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
