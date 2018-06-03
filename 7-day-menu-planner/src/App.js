import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import MenuCalendar from './components/MenuCalendar';
import FavoritesContainer from './containers/FavoritesContainer';
import GroceryListContainer from './containers/GroceryListContainer';
import './App.css';

export default class App extends Component {

  componentDidMount() {
    //if localstorage has items, it will
    //pull from localStorage: favorites, menu, and groceryList
    //will need a mSTD that dispatches
    // actions: loadFavoritesFromStorage, loadGroceryListFromStorage, loadMenuFromStorage
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink className="nav" to='/'>Home</NavLink>
          <NavLink className="nav" to='/menu-calendar'>Menu</NavLink>
          <NavLink className="nav" to='/favorites'>Favorites</NavLink>
          <NavLink className="nav" to='/grocery-list'>Grocery List</NavLink>
          <h1 className="title">7 Day Menu Planner</h1>
        </header>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/menu-calendar' component={MenuCalendar} />
        <Route exact path='/favorites' component={FavoritesContainer} />
        <Route exact path='/grocery-list' component={GroceryListContainer} />
      </div>
    );
  }
}
