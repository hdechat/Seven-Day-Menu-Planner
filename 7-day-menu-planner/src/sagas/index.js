import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import fetchRecipes, { setFavoritesToStorage, getDataFromStorage } from '../api';
import { fetchRecipesSuccess, recipesIsLoading, recipesHasErrored, loadFavoritesToStore} from '../actions';
import { cleanData } from '../helpers';
import { paleo } from '../mock-data.js';

export function* chooseCategory(action) {
  try {
    yield put(recipesIsLoading(true));
    const results = paleo;
    // const results = yield call(fetchRecipes, action.category);
    const recipes = cleanData(results);
    yield put(fetchRecipesSuccess(recipes));
    yield put(recipesIsLoading(false));
  } catch (error) {
    yield put(recipesHasErrored(error.message));
  }
}

export function* addFavoriteToStorage(action) {
  let updatedFavorites;
  const favorites = yield call(getDataFromStorage, 'favorites');
  favorites 
  ? updatedFavorites = [...favorites, action.recipe]
  : updatedFavorites = [action.recipe];
  yield call(setFavoritesToStorage, updatedFavorites);
}

export function* removeFavoriteFromStorage(action) {
  const favorites = yield call(getDataFromStorage, 'favorites');
  const updatedFavorites = favorites.filter(recipe => recipe.title !== action.recipe.title)
  yield call(setFavoritesToStorage, updatedFavorites);
}

export function* retrieveDataFromStorage(action) {
  const favorites = yield call(getDataFromStorage, action.key);
  yield put(loadFavoritesToStore(favorites));
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

export default function* rootSaga() {
  yield all([
    listenForChooseCategory(),
    listenForAddFavoriteToStorage(),
    listenForRemoveFavoriteFromStorage(),
    listenForRetrieveDataFromStorage()
  ])
}
