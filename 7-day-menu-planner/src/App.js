import React, { Component } from 'react';
import './App.css';
import {paleo} from './mock-data.js'
import {cleanData} from './helpers/helpers.js'

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      recipeCards: []
    }
  }

  render() {
    console.log(cleanData(paleo))
    return (
      <div className="App">
        <select onChange={(event)=>{console.log(event.target.value)}} id='diet-plan'>
          <option value='paleo'>Paleo</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='vegan'>Vegan</option>
        </select>
      </div>
    );
  }
}

export default App;