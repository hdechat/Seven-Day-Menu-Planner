import { combineReducers } from 'redux';
import recipes from './recipesReducer';
import menu from './menuReducer';
import groceryList from './groceryListReducer';

const rootReducer = combineReducers( {
  recipes, menu, groceryList
});

export default rootReducer;
