import { connect } from 'react-redux';
import { toggleFavorites } from '../../actions';
import RecipeCard from '../../components/RecipeCard';

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  toggleFavorites: favoritedRecipe => dispatch(toggleFavorites(favoritedRecipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);