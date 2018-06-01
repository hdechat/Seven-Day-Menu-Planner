import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Favorites from '../../components/Favorites';

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default withRouter(connect(mapStateToProps)(Favorites));