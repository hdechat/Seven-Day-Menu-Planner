import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';


export default class AddToMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekday: '',
      mealTime: '',
      text: 'Add this meal to your menu!'
    };
  }

  handleClick = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    const { 
      addToMenu, addToGroceryList, 
      recipe, addGroceryListToStorage, addMenuItemToStorage } = this.props;

    event.preventDefault();
    addToMenu(this.state.weekday, this.state.mealTime, this.props.recipe);
    addToGroceryList(recipe.ingredients);
    addMenuItemToStorage(
      this.state.weekday, 
      this.state.mealTime, 
      this.props.recipe);
    addGroceryListToStorage(recipe.ingredients);
    this.setState({ text: 'ADDED!'});
  }

  listWeekdayOptions = () => {
    const weekdays = [
      'sunday', 'monday', 'tuesday', 
      'wednesday', 'thursday', 'friday', 'saturday'
    ];

    return weekdays.map(day => 
      <option className="option" key={day} value={day}>{day}</option>);
  }

  listMealTimeOptions = () => {
    const mealTimes = ['breakfast', 'lunch', 'dinner'];

    return mealTimes.map(meal => 
      <option className="option" key={meal} value={meal}>{meal}</option>);
  }

  render() {
    return (
      <div>
        <p className="added-state-text">{this.state.text}</p>
        <form className="add-to-menu" onSubmit={this.handleSubmit}>
          <div className="select-category">
            <select name="weekday" id="weekday" onChange={this.handleClick}>
              <option>SELECT WEEKDAY</option>
              {this.listWeekdayOptions()}
            </select>
          </div>
          <div className="select-category">
            <select name="mealTime" id="meal-time" onChange={this.handleClick}>
              <option>SELECT MEAL-TIME</option>
              {this.listMealTimeOptions()}
            </select>
          </div>
          <button 
            className="add-to-menu-button" 
            disabled={!this.state.weekday || !this.state.mealTime} 
            type='submit'>Add To Menu</button>
        </form>
      </div>
    );
  }
}

AddToMenu.propTypes = {
  addToMenu: PropTypes.func, 
  addToGroceryList: PropTypes.func,
  addGroceryListToStorage: PropTypes.func,
  addMenuItemToStorage: PropTypes.func,
  recipe: PropTypes.obj
  
};
