import React, { Component } from 'react';

export default class AddToMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekday: '',
      mealTime: ''
    }
  }

  handleClick = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = () => {
    this.props.addToMenu(this.state.weekday, this.state.mealTime, this.props.recipe);
    this.props.addToGroceryList(this.props.recipe.ingredients);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="weekday" id="weekday" onChange={this.handleClick}>
          <option value='sunday'>Sunday</option>
          <option value='monday'>Monday</option>
          <option value='tuesday'>Tueday</option>
          <option value='wednesday'>Wednesday</option>
          <option value='thursday'>Thursday</option>
          <option value='friday'>Friday</option>
          <option value='saturday'>Saturday</option>
        </select>
        <select name="mealTime" id="meal-time" onChange={this.handleClick}>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='dinner'>Dinner</option>
        </select>
        <button type='submit'>Add To Menu</button>
      </form>
    )
  }
}