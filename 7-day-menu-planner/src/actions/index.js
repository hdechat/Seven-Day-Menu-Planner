
export const recipes = (recipes) => ({
  type: 'FETCH_RECIPES_SUCCESS',
  recipes
});

export const recipesIsLoading = (bool) => ({
  type: 'RECIPES_IS_LOADING',
  recipesIsLoading: bool
});

export const recipesHasErrored = (bool) => ({
  type: 'RECIPES_HAS_ERRORED',
  recipesHasErrored: bool
});