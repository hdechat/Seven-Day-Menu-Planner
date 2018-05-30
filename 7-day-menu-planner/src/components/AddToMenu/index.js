import React, { Component } from 'react';

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
    const { addToMenu, addToGroceryList, recipe } = this.props;

    event.preventDefault();
    addToMenu(this.state.weekday, this.state.mealTime, this.props.recipe);
    addToGroceryList(recipe.ingredients);
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
      <form onSubmit={this.handleSubmit}>
        <select name="weekday" id="weekday" onChange={this.handleClick}>
          <option>SELECT WEEKDAY</option>
          {this.listWeekdayOptions()}
        </select>
        <select name="mealTime" id="meal-time" onChange={this.handleClick}>
          <option>SELECT MEAL-TIME</option>
          {this.listMealTimeOptions()}
        </select>
        <button type='submit'>Add To Menu</button>
      </form>
    );
  }
}
