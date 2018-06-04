import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import fetchRecipes, { setFavoritesToStorage, getFavoritesFromStorage } from '../api';
import { fetchRecipesSuccess, recipesIsLoading, recipesHasErrored, } from '../actions';
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
  const favorites = yield call(getFavoritesFromStorage);
  favorites 
  ? updatedFavorites = [...favorites, action.recipe]
  : updatedFavorites = [action.recipe];
  yield call(setFavoritesToStorage, updatedFavorites);
}

export function* listenForChooseCategory() {
  yield takeLatest('CHOOSE_CATEGORY', chooseCategory);
}

export function* listenForAddFavoriteToStorage() {
  yield takeEvery('ADD_FAVORITE_TO_STORAGE', addFavoriteToStorage);
}

export default function* rootSaga() {
  yield all([
    listenForChooseCategory(),
    listenForAddFavoriteToStorage()
  ])
}