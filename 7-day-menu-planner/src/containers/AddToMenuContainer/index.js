import { connect } from 'react-redux';
import AddToMenu from '../../components/AddToMenu';
import { addToMenu, addToGroceryList } from '../../actions';
import { withRouter } from 'react-router';

export const mapDispatchToProps = dispatch => ({
  addToMenu: (weekday, mealTime, recipe) => dispatch(addToMenu(weekday, mealTime, recipe)),
  addToGroceryList: ingredients => dispatch(addToGroceryList(ingredients))
});

export default connect(null, mapDispatchToProps)(AddToMenu);