import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import MenuCalendarContainer from './containers/MenuCalendarContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/menu-calendar'>Menu Calendar</NavLink>
          <NavLink to='/'>Home</NavLink>
        </header>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/menu-calendar' component={MenuCalendarContainer} />
      </div>
    );
  }
}
