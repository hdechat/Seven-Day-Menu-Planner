import React, { Component } from 'react';
import './index.css';

export default class AddToMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekday: '',
      mealTime: ''
    };
  }

  handleClick = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    const { 
      addToMenu, addToGroceryList, 
      recipe, addGroceryListToStorage } = this.props;

    event.preventDefault();
    addToMenu(this.state.weekday, this.state.mealTime, this.props.recipe);
    addToGroceryList(recipe.ingredients);
    addGroceryListToStorage(recipe.ingredients);
  }

  listWeekdayOptions = () => {
    const weekdays = [
      'sunday', 'monday', 'tuesday', 
      'wednesday', 'thursday', 'friday', 'saturday'
    ];

    return weekdays.map(day => <option key={day} value={day}>{day}</option>);
  }

  listMealTimeOptions = () => {
    const mealTimes = ['breakfast', 'lunch', 'dinner'];

    return mealTimes.map(meal => <option key={meal} value={meal}>{meal}</option>);
  }

  render() {
    return (
      <div>
        <p>Add this meal to your menu!</p>
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
          <button type='submit'>Add To Menu</button>
        </form>
      </div>
    );
  }
}
