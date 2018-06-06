import { connect } from 'react-redux';
import { toggleFavorites, addFavoriteToStorage, removeFavoriteFromStorage } from '../../actions';
import RecipeCard from '../../components/RecipeCard';

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  toggleFavorites: recipe => 
    dispatch(toggleFavorites(recipe)),
  addFavoriteToStorage: recipe => 
    dispatch(addFavoriteToStorage(recipe)),
  removeFavoriteFromStorage: recipe => 
    dispatch(removeFavoriteFromStorage(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);