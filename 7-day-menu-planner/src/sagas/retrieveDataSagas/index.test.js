import * as sagas from './index.js';
import { call, put,takeEvery } from 'redux-saga/effects';
import { getDataFromStorage, setToStorage } from '../../api';
import { loadFavoritesToStore } from '../../actions';

describe('retrieveDataFromStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'RETRIEVE_DATA_FROM_STORAGE',
      key: 'favorites'
    };

    iterator = sagas.retrieveDataFromStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //Need to learn out how to mock the getDatafromStorage call

    const value = iterator.next().value;
  });

// it('should yield put with loadFavoritesToStore with correct params', () => {
  //   const expected = put(loadFavoritesToStore());
  //   const value = iterator.next().value;

  //   expect(value).toEqual(expected);
  // });

  // it('should be done', () => {
  //   const done = iterator.next().done;

  //   expect(done).toBe(true);
  // });
});

describe('listenForRetrieveDataFromStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForRetrieveDataFromStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('RETRIEVE_DATA_FROM_STORAGE', sagas.retrieveDataFromStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});
