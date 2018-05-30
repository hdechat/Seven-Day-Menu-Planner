import { connect } from 'react-redux';
import { chooseCategory } from '../../actions';
import { withRouter } from 'react-router'
import Home from '../../components/Home';

export const mapStateToProps = state => ({
  recipesIsLoading: state.recipes.recipesIsLoading,
  recipeCards: state.recipes.results
});
export const mapDispatchToProps = dispatch => ({
  chooseCategory: category => dispatch(chooseCategory(category))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));