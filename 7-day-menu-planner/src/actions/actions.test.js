import * as actions from './index.js';
import { cleanedPaleoRecipes } from '../mock-data.js';

describe('Paleo Fetch Success', () => {
  it('should return an array of cleaned recipe objects', () => {
    const expected = {
      type: 'FETCH_PALEO_SUCCESS',
      recipes: cleanedPaleoRecipes
    };

    const actual = actions.fetchPaleoSuccess(cleanedPaleoRecipes)

    expect(actual).toEqual(expected);
  });
  
});