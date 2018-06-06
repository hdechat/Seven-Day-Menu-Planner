import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import fetchRecipes from '../../api';
import * as actions from '../../actions';
import { cleanData } from '../../helpers';
import { paleo } from '../../mock-data.js';

export function* chooseCategory(action) {
  try {
    yield put(actions.recipesIsLoading(true));
    // const results = paleo;
    const results = yield call(fetchRecipes, action.lang, action.category);
    const recipes = cleanData(results);
    yield put(actions.fetchRecipesSuccess(recipes));
    yield put(actions.recipesIsLoading(false));
  } catch (error) {
    yield put(actions.recipesHasErrored(error.message));
  }
}

export function* listenForChooseCategory() {
  yield takeLatest('CHOOSE_CATEGORY', chooseCategory);
}