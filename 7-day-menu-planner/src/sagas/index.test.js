import * as sagas from './index.js';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRecipes } from '../api';
import { recipes, recipesIsLoading, recipesHasErrored } from '../actions';

describe('listenForChooseCategory', () => {
  let iterator

  beforeEach(() => {
    iterator = sagas.listenForChooseCategory()
  });

  it('should yield takeLatest with the correct params', () => {
    const value = iterator.next().value

    const expected = takeLatest('CHOOSE_CATEGORY, sagas.chooseCategory');

    expect(value).toEqual(expected);

  });
});
