import * as actions from './index.js';
import { cleanedPaleoRecipes } from '../mock-data.js';

describe('PALEO ACTIONS', () => {
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

  describe('Paleo Is Loading', () => {
    it('should return a boolean', () => {
      const expected = {
        type: 'PALEO_IS_LOADING',
        paleoIsLoading: true
      }

      const actual = actions.paleoIsLoading(true);

      expect(actual).toEqual(expected);      
    });
  });
});

// expect(actual).toEqual(expected);