import { call, put, takeEvery  } from 'redux-saga/effects';
import { setToStorage, getDataFromStorage } from '../../api';

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

export function* listenForAddFavoriteToStorage() {
  yield takeEvery('ADD_FAVORITE_TO_STORAGE', addFavoriteToStorage);
}

export function* listenForRemoveFavoriteFromStorage() {
  yield takeEvery('REMOVE_FAVORITE_FROM_STORAGE', removeFavoriteFromStorage);
}
