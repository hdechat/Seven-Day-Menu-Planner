const initialState = {
  results: []
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_SUCCESS':
      if(action.recipes.length) {
      return {...state, results: action.recipes, recipesHasErrored: ''};
      }
    case 'RECIPES_HAS_ERRORED':
      return {...state, recipesHasErrored: action.error};
    case 'RECIPES_IS_LOADING':
      return {...state, recipesIsLoading: action.recipesIsLoading};
    default:
      return state;
  }
};

export default recipesReducer;