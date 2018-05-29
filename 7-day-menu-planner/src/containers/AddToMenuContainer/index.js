import { connect } from 'react-redux';
import AddToMenu from '../../components/AddToMenu';
import { addToMenu } from '../../actions';

export const mapDispatchToProps = dispatch => ({
  addToMenu: (weekday, mealTime, recipe) => dispatch(addToMenu(weekday, mealTime, recipe))
});

export default connect(null, mapDispatchToProps)(AddToMenu);