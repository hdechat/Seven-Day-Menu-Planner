import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MenuCalendar from '../../components/MenuCalendar';
import { removeFromMenu } from '../../actions';

export const mapStateToProps = state => ({
  menu: state.menu
});

export const mapDispatchToProps = dispatch => ({
  removeFromMenu: (weekday, mealTime) => dispatch(removeFromMenu(weekday, mealTime))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuCalendar));
