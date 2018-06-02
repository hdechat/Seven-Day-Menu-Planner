import { mapStateToprops } from './index.js';

describe('GROCERY LIST CONTAINER', () => {
  it('should return the expected object', () => {
   const mockState = {
    recipes: {},
    favorites: [],
    groceryList: ['apples', 'bananas']
   }

   const actual = mapStateToprops(mockState);

   const expected = {
    groceryList: ['apples', 'bananas']
   };

   expect(actual).toEqual(expected);
  });
});