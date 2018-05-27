
export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_SUCCESS':
      return [...state, ...action.recipes];
    default:
      return state;
  }
};

export const recipesIsLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'RECIPES_IS_LOADING':
      return action.recipesIsLoading;
    default:
      return state;
  }
};

export const recipesHasErroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'RECIPES_HAS_ERRORED':
      return action.recipesHasErrored;
    default:
      return state;
  }
};