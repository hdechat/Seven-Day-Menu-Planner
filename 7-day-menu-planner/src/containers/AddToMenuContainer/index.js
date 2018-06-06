import { connect } from 'react-redux';
import AddToMenu from '../../components/AddToMenu';
import { addToMenu, addToGroceryList, addGroceryListToStorage, addMenuItemToStorage } from '../../actions';

export const mapDispatchToProps = dispatch => ({
  addToMenu: (weekday, mealTime, recipe) => 
    dispatch(addToMenu(weekday, mealTime, recipe)),
  addToGroceryList: ingredients => 
    dispatch(addToGroceryList(ingredients)),
  addGroceryListToStorage: groceryList => 
    dispatch(addGroceryListToStorage(groceryList)),
  addMenuItemToStorage: (weekday, mealTime, recipe) => 
    dispatch(addMenuItemToStorage(weekday, mealTime, recipe))
});

export default connect(null, mapDispatchToProps)(AddToMenu);