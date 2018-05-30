import { connect } from 'react-redux';
import MenuCalendar from '../../components/MenuCalendar';
import { withRouter } from 'react-router'

export const mapStateToProps = state => ({
  menu: state.menu
});

export default withRouter(connect(mapStateToProps)(MenuCalendar));
