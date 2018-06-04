import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Route, withRouter } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import MenuCalendar from './components/MenuCalendar';
import FavoritesContainer from './containers/FavoritesContainer';
import GroceryListContainer from './containers/GroceryListContainer';
import { retrieveDataFromStorage } from './actions';
import './App.css';

export class App extends Component {

  componentDidMount() {
    this.props.retrieveDataFromStorage('favorites');
    this.props.retrieveDataFromStorage('groceryList');
    this.props.retrieveDataFromStorage('menu');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink className="nav" to='/'>
            <h1 className="title">7 Day Menu Planner</h1>
          </NavLink>
          <NavLink className="nav" to='/'>Home</NavLink>
          <NavLink className="nav" to='/menu-calendar'>Menu</NavLink>
          <NavLink className="nav" to='/favorites'>Favorites</NavLink>
          <NavLink className="nav" to='/grocery-list'>Grocery List</NavLink>
        </header>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/menu-calendar' component={MenuCalendar} />
        <Route exact path='/favorites' component={FavoritesContainer} />
        <Route exact path='/grocery-list' component={GroceryListContainer} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  retrieveDataFromStorage: key => dispatch(retrieveDataFromStorage(key))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
