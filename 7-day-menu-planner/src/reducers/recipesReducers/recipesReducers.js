const initialState = {
  results: [],
}

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_CATEGORY':
      return {...state, category: action.category}
    case 'FETCH_RECIPES_SUCCESS':
      return {...state, results: action.recipes};
    case 'RECIPES_HAS_ERRORED':
      return {...state, recipesHasErrored: action.recipesHasErrored};
    case 'RECIPES_IS_LOADING':
      return {...state, recipesIsLoading: action.recipesIsLoading};
      return 
    default:
      return state;
  }
};