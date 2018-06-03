import { call, put, takeLatest } from 'redux-saga/effects';
import fetchRecipes from '../api';
import { fetchRecipesSuccess, recipesIsLoading, recipesHasErrored } from '../actions';
import { cleanData } from '../helpers';
// import { paleo } from '../mock-data.js';

export function* chooseCategory(action) {
  try {
    yield put(recipesIsLoading(true));
    // const results = paleo;
    const results = yield call(fetchRecipes, action.category);
    const recipes = cleanData(results);
    yield put(fetchRecipesSuccess(recipes));
    yield put(recipesIsLoading(false));
  } catch (error) {
    yield put(recipesHasErrored(error.message));
  }
}

export function* listenForChooseCategory() {
  yield takeLatest('CHOOSE_CATEGORY', chooseCategory);
}

export default listenForChooseCategory;
