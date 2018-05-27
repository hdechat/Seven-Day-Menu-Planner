import { combineReducers } from 'redux';
import recipes from './recipesReducers.js';

const rootReducer = combineReducers( {
  recipes
});

export default rootReducer;
