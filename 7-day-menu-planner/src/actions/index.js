export const chooseCategory = (category) => ({
  type: 'CHOOSE_CATEGORY',
  category
});

export const fetchRecipesSuccess = (recipes) => ({
  type: 'FETCH_RECIPES_SUCCESS',
  recipes
});

export const recipesIsLoading = (bool) => ({
  type: 'RECIPES_IS_LOADING',
  recipesIsLoading: bool
});

export const recipesHasErrored = (error) => ({
  type: 'RECIPES_HAS_ERRORED',
  error
});

export const addToMenu = (weekday, mealTime, recipe) => ({
  type: 'ADD_TO_MENU',
  weekday,
  mealTime,
  recipe
});

export const addToGroceryList = (ingredients) => ({
  type: 'ADD_TO_GROCERY_LIST',
  ingredients
});

export const toggleFavorites = (toggledRecipe) => ({
  type: 'TOGGLE_FAVORITES',
  toggledRecipe
});