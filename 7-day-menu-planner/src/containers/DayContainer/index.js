import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Day from '../../components/Day';
import { removeFromMenu, removeFromGroceryList, removeGroceryListFromStorage} from '../../actions';

export const mapStateToProps = state => ({
  menu: state.menu
});

export const mapDispatchToProps = dispatch => ({
  removeFromMenu: (weekday, mealTime) => dispatch(removeFromMenu(weekday, mealTime)),
  removeFromGroceryList: ingredients => dispatch(removeFromGroceryList(ingredients)),
  removeGroceryListFromStorage: groceryList => dispatch(removeGroceryListFromStorage(groceryList))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Day));
