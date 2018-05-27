import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      dietPlan: ''
    }
  }

  handleClick = async (event) => {
    await this.setState({ dietPlan: event.target.value} );
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