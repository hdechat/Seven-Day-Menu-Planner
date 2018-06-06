import React, { Component } from 'react';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      userSearch: '',
      spanishSearch: ''
    };
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
        <h2>Find Your Recipe / Encuentra Tu Receta<span>BETA</span></h2>
        <div className="english-spanish">
          <div className="english">  
            <div className="select-category">
              <select 
                onChange={event => chooseCategory('api', event.target.value)}
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
              onKeyPress={e => e.key === 'Enter' ? chooseCategory('api', this.state.userSearch) : ''} />
          </div>
          <div className="spanish">
            <div className="select-category">
              <select 
                onChange={event => chooseCategory('test-es', event.target.value)}
                id='category'>
                <option>CATEGORIAS</option>
                <option value='paleo'>Paleo</option>
                <option value='vegetarian'>Vegetariano</option>
                <option value='vegan'>Vegano</option>
              </select>
            </div>
            <input 
              className='search' 
              type='search'
              placeholder='Buscar'
              value={this.state.spanishSearch}
              onChange={event => this.setState({spanishSearch: event.target.value})}
              onKeyPress={e => e.key === 'Enter' ? chooseCategory('test-es', this.state.spanishSearch) : ''} />
          </div>
        </div>
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
