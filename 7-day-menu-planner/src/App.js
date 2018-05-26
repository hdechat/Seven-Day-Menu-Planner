import React, { Component } from 'react';
import './App.css';
import { paleo } from './mock-data.js'
import { cleanData } from './helpers/helpers.js'

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      recipeCards: [],
      dietPlan: ''
    }
  }

  handleClick = (event) => {
    console.log(event.target.value)
    this.setState({ dietPlan: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <select onChange={this.handleClick} id='diet-plan'>
          <option>SELECT DIET PLAN</option>
          <option value='paleo'>Paleo</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
        </select>
      </div>
    );
  }
}

export default App;