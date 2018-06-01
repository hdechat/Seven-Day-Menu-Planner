import { connect } from 'react-redux';
import { addToFavorites } from '../../actions';
import RecipeCard from '../../components/RecipeCard'

export const mapDispatchToProps = dispatch => ({
  addToFavorites: favoritedRecipe => dispatch(addToFavorites(favoritedRecipe))
});

export default connect(null, mapDispatchToProps)(RecipeCard);