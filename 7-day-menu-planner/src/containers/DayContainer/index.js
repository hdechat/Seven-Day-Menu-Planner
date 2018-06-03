import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Day from '../../components/Day';
import { removeFromMenu, removeFromGroceryList } from '../../actions';

export const mapStateToProps = state => ({
  menu: state.menu
});

export const mapDispatchToProps = dispatch => ({
  removeFromMenu: (weekday, mealTime) => dispatch(removeFromMenu(weekday, mealTime)),
  removeFromGroceryList: ingredients => dispatch(removeFromGroceryList(ingredients))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Day));
