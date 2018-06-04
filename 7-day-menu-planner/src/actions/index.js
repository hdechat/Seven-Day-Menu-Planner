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

export const removeFromMenu = (weekday, mealTime) => ({
  type: 'REMOVE_FROM_MENU',
  weekday,
  mealTime
});

export const addToGroceryList = (ingredients) => ({
  type: 'ADD_TO_GROCERY_LIST',
  ingredients
});

export const removeFromGroceryList = (ingredients) => ({
  type: 'REMOVE_FROM_GROCERY_LIST',
  ingredients
});

export const toggleFavorites = (toggledRecipe) => ({
  type: 'TOGGLE_FAVORITES',
  toggledRecipe
});

//LOCAL STORAGE ACTIONS
export const retrieveDataFromStorage = (key) => ({
  type: 'RETRIEVE_DATA_FROM_STORAGE',
  key
});

export const loadFavoritesToStore = (favorites) => ({
  type: 'LOAD_FAVORITES_TO_STORE',
  favorites
});

export const loadGroceryListToStore = (groceryList) => ({
  type: 'LOAD_GROCERY_LIST_TO_STORE',
  groceryList
});

export const loadMenuToStore = (menu) => ({
  type: 'LOAD_MENU_TO_STORE',
  menu
});

export const addFavoriteToStorage = (recipe) => ({
  type: 'ADD_FAVORITE_TO_STORAGE',
  recipe
});

export const removeFavoriteFromStorage = (recipe) => ({
  type: 'REMOVE_FAVORITE_FROM_STORAGE',
  recipe
});

export const addGroceryListToStorage = (groceryList) => ({
  type: 'ADD_GROCERY_LIST_TO_STORAGE',
  groceryList
});

export const removeGroceryListFromStorage = (groceryList) => ({
  type: 'REMOVE_GROCERY_LIST_FROM_STORAGE',
  groceryList
});

export const addMenuItemToStorage = (weekday, mealTime, recipe) => ({
  type: 'ADD_MENU_ITEM_TO_STORAGE',
  weekday,
  mealTime,
  recipe
});

export const removeMenuItemFromStorage = (weekday, mealTime) => ({
  type: 'REMOVE_MENU_ITEM_FROM_STORAGE',
  weekday,
  mealTime,
});