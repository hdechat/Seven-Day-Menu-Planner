import * as reducers from './paleoReducers.js';
import { fetchPaleoSuccess, paleoIsLoading, paleoHasErrored } from '../../actions';
import { cleanedPaleoRecipes } from '../../mock-data.js';

describe('Fetch Paleo Success Reducer', () => {
  it('should return empty array if there is no given state', () => {
    const actual = reducers.fetchPaleoSuccessReducer(undefined, {type: '@@INIT'});

    expect(actual).toEqual([]);
  });

  it('should return an array of recipes object when it receives the correct action', () => {
    const state = [{test: 'object'}];

    const expected = [{test: 'object'}, ...cleanedPaleoRecipes];

    const actual = reducers.fetchPaleoSuccessReducer(state, fetchPaleoSuccess(cleanedPaleoRecipes));

    expect(actual).toEqual(expected);
  });
});

describe('Paleo Is Loading Reducer', () => {
  it('should return false if there is no given state', () => {
    const actual = reducers.paleoIsLoadingReducer(undefined, {type: '@@INIT'});

    expect(actual).toBe(false);
  });

  it('should return a boolean when it receives the correct action', () => {
    const state = false;
    const actual = reducers.paleoIsLoadingReducer(state, paleoIsLoading(true))
    expect(actual).toBe(true);
  });
});

describe('Paleo Has Errored Reducer', () => {
  it('should return false if there is no given state', () => {
    const actual = reducers.paleoHasErroredReducer(undefined, {type: '@@INIT'});

    expect(actual).toBe(false);
  });

  it('should return a boolean when it receives the correct action', () => {
    const state = false;
    const actual = reducers.paleoHasErroredReducer(state, paleoHasErrored(true))
    expect(actual).toBe(true);
  });
});














