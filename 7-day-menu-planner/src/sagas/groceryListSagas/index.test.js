import * as sagas from './index.js';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getDataFromStorage, setToStorage } from '../../api';

describe('addGroceryListToStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'ADD_GROCERY_LIST_TO_STORAGE',
      groceryList: ['apples']
    };

    iterator = sagas.addGroceryListToStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //Need to learn out how to mock the getDatafromStorage call

    const value = iterator.next().value;

  });


  it('should yield call with setToStorage and correct params', () => {
    const mockUpdatedGroceryList = ['apples']

    const expected = call(setToStorage, 'groceryList', mockUpdatedGroceryList);

    const value = iterator.next().value;

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('removeGroceryListFromStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'REMOVE_GROCERY_LIST_FROM_STORAGE',
      groceryList: ['apples']
    };

    iterator = sagas.removeGroceryListFromStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //Need to learn out how to mock the getDatafromStorage call

    const value = iterator.next().value;
  });


  it('should yield call with setToStorage and correct params', () => {
    const mockUpdatedGroceryList = ['apples'];

    const expected = call(setToStorage, 'groceryList', []);

    const value = iterator.next(mockUpdatedGroceryList).value;

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});




describe('listenForAddGroceryListToStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForAddGroceryListToStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('ADD_GROCERY_LIST_TO_STORAGE', sagas.addGroceryListToStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('listenForRemoveGroceryListFromStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForRemoveGroceryListFromStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('REMOVE_GROCERY_LIST_FROM_STORAGE', sagas.removeGroceryListFromStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});






