import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MenuCalendar from '../../components/MenuCalendar';

export const mapStateToProps = state => ({
  menu: state.menu
});

export default withRouter(connect(mapStateToProps)(MenuCalendar));
