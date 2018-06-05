import { all } from 'redux-saga/effects';
import rootSaga from './index.js';

describe('ROOT SAGA', () => {
  it('should contain all the listeners', () => {
  const actual = rootSaga().next().value.ALL
  
  expect(actual.length).toEqual(8);
  });
});