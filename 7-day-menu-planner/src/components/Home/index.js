import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeCardsDisplay from '../RecipeCardsDisplay';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      category: '',
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
        <img 
        className="loading-gif" 
        src="https://media.giphy.com/media/HtJ6BUl24PJHW/giphy.gif" 
        alt="gif animation of girl chopping carrots"/>
        : null;
      };

      const displayErrorMessage = () => {
        return recipesHasErrored ?
        <p className="error-message">{recipesHasErrored} :(</p> : null;
      };

      const displayWelcomeMessage = () => {
        return !recipeCards.length ?
        <p className="welcome-message">
        Welcome to your 7 meal planner!
        </p> : null;
      };

      return (
        <section className="home">
          <div className="background">

            <div className="english-spanish">
              <h2 className="find-your-recipe">
                Find Your Recipe
              </h2>
              <select 
                className="select-category english-select"
                onChange={event => {
                  this.setState({ category: event.target.value })
                  chooseCategory('api', event.target.value)}
                }
                id='category'>
                <option>SELECT CATEGORY</option>
                <option value='gluten-free'>Gluten-Free</option>
                <option value='paleo'>Paleo</option>
                <option value='vegetarian'>Vegetarian</option>
                <option value='vegan'>Vegan</option>
              </select>
              <span className="or">or</span>
              <input 
                className='search' 
                id='english-search'
                type='search'
                placeholder='Search'
                value={this.state.category}
                onChange={event => this.setState({category: event.target.value})}
                onKeyPress={event => event.key === 'Enter' 
                ? chooseCategory('api', this.state.category) 
                : ''} 
              />
              <select 
               onChange={event => 
                  chooseCategory(
                    'api', 
                    this.state.category, 
                    event.target.value)
                }
                id='filters'>
                <option>Filter Options</option>
                <option value='&diet=low-carb'>Low-Carb</option>
                <option className="option" value='&health=peanut-free'>
                  Peanut-Free
                </option>
                <option className="option" value='tree-nut-free'>
                  Tree-Nut-Free
                </option>
              </select>
            </div>

            <div className="english-spanish">
              <h2 className="find-your-recipe">
                Encuentra Tu Receta<span className="beta">BETA</span>
               </h2>
              <select 
                className="select-category spanish-select"
                onChange={event => 
                chooseCategory('test-es', event.target.value)}
                id='category'>
                <option>CATEGORIAS</option>
                <option value='paleo'>Paleo</option>
                <option value='sin gluten'>Sin Gluten</option>
                <option value='vegan'>Vegano</option>
                <option value='vegetarian'>Vegetariano</option>
              </select>
              <span className="or">or</span>
              <input 
                className="search"
                id="spanish-search"
                type='search'
                placeholder='Buscar'
                value={this.state.spanishSearch}
                onChange={event => 
                  this.setState({spanishSearch: event.target.value})}
                  onKeyPress={event => event.key === 'Enter' 
                  ? chooseCategory('test-es', this.state.spanishSearch) 
                  : ''} 
              />
                <select 
                onChange={event => 
                  chooseCategory(
                    'test-es', 
                    this.state.spanishSearch, 
                    event.target.value)
                }
                id='filters-sp'>
                <option>Filter Options</option>
                <option value='&diet=low-carb'>Baja en Carb</option>
                <option className="option" value='&health=peanut-free'>
                Sin Mani
                </option>
                <option className="option" value='tree-nut-free'>
                Sin Nueces de Arbol
                </option>
                </select>
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
    };
  }

  export default Home;

  Home.propTypes = {
    recipeCards: PropTypes.array, 
    chooseCategory: PropTypes.func, 
    recipesIsLoading: PropTypes.bool, 
    recipesHasErrored : PropTypes.string
  };
