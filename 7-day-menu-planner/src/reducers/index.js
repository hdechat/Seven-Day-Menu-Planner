import { combineReducers } from 'redux';
import recipes from './recipesReducers';

const rootReducer = combineReducers( {
  recipes
});

export default rootReducer;
