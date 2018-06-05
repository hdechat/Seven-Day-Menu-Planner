import * as sagas from './index.js';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getDataFromStorage, setToStorage } from '../../api';

describe('addMenuItemToStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'ADD_MENU_ITEM_TO_STORAGE',
      weekday: 'sunday',
      mealTime: 'lunch',
      recipe: {title: 'recipe name'}
    }
    iterator = sagas.addMenuItemToStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //need to learn how to test specifically for call
    const params = iterator.next().value.CALL.args

    expect(...params).toEqual('menu')
  });

  it('should yield call with setToStorage and correct params', () => {
    const mockUpdatedMenu = [
      {sunday: {lunch: {title: 'recipe name'}}}
    ]

    const expected = call(setToStorage, 'menu', mockUpdatedMenu);
    const value = iterator.next().value;

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('removeMenuItemFromStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'REMOVE_MENU_ITEM_FROM_STORAGE',
      weekday: 'sunday',
      mealTime: 'lunch',
      recipe: {title: 'recipe name'}
    };

    iterator = sagas.removeMenuItemFromStorage(mockAction);

  });

  it('should yield call with getDataFromStorage and correct params', () => {
    it('should yield call with getDataFromStorage and correct params', () => {
      const params = iterator.next().value.CALL.args;
      expect(...params).toEqual('menu');
    });
  });

  it('should yield call with setToStorage and correct params', () => {
    iterator.next()
    const expected = iterator.next([
      {sunday: {lunch: {title: 'recipe name'}}}
    ]).value;

    const value = call(setToStorage, 'menu', [])

    expect(value).toEqual(expected)
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });

});













