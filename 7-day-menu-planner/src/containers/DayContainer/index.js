import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Day from '../../components/Day';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  menu: state.menu
});

export const mapDispatchToProps = dispatch => ({
  removeFromMenu: (weekday, mealTime) => 
    dispatch(actions.removeFromMenu(weekday, mealTime)),
  removeFromGroceryList: ingredients => 
    dispatch(actions.removeFromGroceryList(ingredients)),
  removeGroceryListFromStorage: groceryList => 
    dispatch(actions.removeGroceryListFromStorage(groceryList)),
  removeMenuItemFromStorage: (weekday, mealTime, recipe) => 
    dispatch(actions.removeMenuItemFromStorage(weekday, mealTime, recipe))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Day));
