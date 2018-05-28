import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { chooseCategory } from './actions';

export class App extends Component {
  constructor(props) {
    super();

    this.state = {
      category: ''
    }
  }

  handleClick = async (event) => {
    await this.setState({ dietPlan: event.target.value});
    this.props.chooseCategory(this.state.dietPlan);
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

export const mapDispatchToProps = dispatch => ({
  chooseCategory: category => dispatch(chooseCategory(category))
})

export default connect(null, mapDispatchToProps)(App);