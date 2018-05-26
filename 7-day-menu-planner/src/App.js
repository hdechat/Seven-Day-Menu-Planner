import React, { Component } from 'react';
import './App.css';
import { paleo } from './mock-data.js'
import { cleanData } from './helpers/helpers.js'

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      recipeCards: []
    }
  }

  render() {
    return (
      <div className="App">
        <select id='diet-plan'>
          <option value='paleo'>Paleo</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
        </select>
      </div>
    );
  }
}

export default App;