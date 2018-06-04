import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import fetchRecipes, { setToStorage, getDataFromStorage } from '../api';
import * as actions from '../actions';
import { cleanData } from '../helpers';
import { paleo } from '../mock-data.js';

export function* chooseCategory(action) {
  try {
    yield put(actions.recipesIsLoading(true));
    const results = paleo;
    // const results = yield call(fetchRecipes, action.category);
    const recipes = cleanData(results);
    yield put(actions.fetchRecipesSuccess(recipes));
    yield put(actions.recipesIsLoading(false));
  } catch (error) {
    yield put(actions.recipesHasErrored(error.message));
  }
}

export function* addFavoriteToStorage(action) {
  let updatedFavorites;
  const favorites = yield call(getDataFromStorage, 'favorites');
  favorites 
    ? updatedFavorites = [...favorites, action.recipe]
    : updatedFavorites = [action.recipe];
  yield call(setToStorage, 'favorites', updatedFavorites);
}

export function* removeFavoriteFromStorage(action) {
  const favorites = yield call(getDataFromStorage, 'favorites');
  const updatedFavorites = favorites.filter(recipe => 
    recipe.title !== action.recipe.title)
  yield call(setToStorage, 'favorites', updatedFavorites);
}

export function* retrieveDataFromStorage(action) {
  switch (action.key) {
    case 'favorites':
      const favorites = yield call(getDataFromStorage, action.key);
      favorites
        ? yield put(actions.loadFavoritesToStore(favorites))
        : null;
      break;
    case 'groceryList':
      const groceryList = yield call(getDataFromStorage, action.key);
        groceryList
          ? yield put(actions.loadGroceryListToStore(groceryList))
          : null;
        break;
    case 'menu':
      const menu = yield call(getDataFromStorage, action.key);
        menu
          ? yield put(actions.loadMenuToStore(menu))
          : null;
        break;
    default:
      return
  }
}

export function* addGroceryListToStorage(action) {
  let updatedGroceryList;
  const groceryList = yield call(getDataFromStorage, 'groceryList');
  groceryList
    ? updatedGroceryList = [...groceryList, ...action.groceryList]
    : updatedGroceryList = action.groceryList;
  yield call(setToStorage, 'groceryList', updatedGroceryList);
}

export function* removeGroceryListFromStorage(action) {
  const groceryList = yield call(getDataFromStorage, 'groceryList');
  const updatedGroceryList = groceryList.filter(ingred => !action.groceryList.includes(ingred));
  yield call(setToStorage, 'groceryList', updatedGroceryList);
}

export function* addMenuItemToStorage(action) {
  let updatedMenu;
  const menu = yield call(getDataFromStorage, 'menu');
  menu
    ? updatedMenu = [...menu, {[action.weekday]: {[action.mealTime]: action.recipe}}]
    : updatedMenu = [{[action.weekday]: {[action.mealTime]: action.recipe}}];
  yield call(setToStorage, 'menu', updatedMenu)
}

export function* removeMenuItemFromStorage(action) {
  const menu = yield call(getDataFromStorage, 'menu');
  const updatedMenu = menu.filter(item => {
    return JSON.stringify(item) !== JSON.stringify({[action.weekday]: {[action.mealTime]: action.recipe}})
  });
  yield call(setToStorage, 'menu', updatedMenu);
}

//LISTENERS
export function* listenForChooseCategory() {
  yield takeLatest('CHOOSE_CATEGORY', chooseCategory);
}

export function* listenForAddFavoriteToStorage() {
  yield takeEvery('ADD_FAVORITE_TO_STORAGE', addFavoriteToStorage);
}

export function* listenForRemoveFavoriteFromStorage() {
  yield takeEvery('REMOVE_FAVORITE_FROM_STORAGE', removeFavoriteFromStorage);
}

export function* listenForRetrieveDataFromStorage() {
  yield takeEvery('RETRIEVE_DATA_FROM_STORAGE', retrieveDataFromStorage);
}

export function* listenForAddGroceryListToStorage() {
  yield takeEvery('ADD_GROCERY_LIST_TO_STORAGE', addGroceryListToStorage);
}

export function* listenForRemoveGroceryListFromStorage() {
  yield takeEvery('REMOVE_GROCERY_LIST_FROM_STORAGE', removeGroceryListFromStorage);
}

export function* listenForAddMenuItemToStorage() {
  yield takeEvery('ADD_MENU_ITEM_TO_STORAGE', addMenuItemToStorage);
}

export function* listenForRemoveMenuItemFromStorage() {
  yield takeEvery('REMOVE_MENU_ITEM_FROM_STORAGE', removeMenuItemFromStorage);
}

export default function* rootSaga() {
  yield all([
    listenForChooseCategory(),
    listenForAddFavoriteToStorage(),
    listenForRemoveFavoriteFromStorage(),
    listenForRetrieveDataFromStorage(),
    listenForAddGroceryListToStorage(),
    listenForRemoveGroceryListFromStorage(),
    listenForAddMenuItemToStorage(),
    listenForRemoveMenuItemFromStorage()
  ])
}
