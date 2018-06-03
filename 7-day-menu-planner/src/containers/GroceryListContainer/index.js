import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import GroceryList from '../../components/GroceryList';

export const mapStateToProps = state => ({
  groceryList: state.groceryList
});

export default withRouter(connect(mapStateToProps)(GroceryList));

