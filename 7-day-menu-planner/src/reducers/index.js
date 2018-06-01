import { combineReducers } from 'redux';
import recipes from './recipesReducer';
import menu from './menuReducer';
import groceryList from './groceryListReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  recipes, menu, groceryList, favorites
});

export default rootReducer;
