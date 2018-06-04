import { connect } from 'react-redux';
import AddToMenu from '../../components/AddToMenu';
import { addToMenu, addToGroceryList, addGroceryListToStorage } from '../../actions';

export const mapDispatchToProps = dispatch => ({
  addToMenu: (weekday, mealTime, recipe) => dispatch(addToMenu(weekday, mealTime, recipe)),
  addToGroceryList: ingredients => dispatch(addToGroceryList(ingredients)),
  addGroceryListToStorage: groceryList => dispatch(addGroceryListToStorage(groceryList))
});

export default connect(null, mapDispatchToProps)(AddToMenu);