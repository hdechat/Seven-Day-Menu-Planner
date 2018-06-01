import * as reducers from './index.js';
import { addToFavorites } from '../../actions';

describe('Favorites Reducer', () => {
  let mockState;

  beforeEach(() => {
    mockState = [];
  });

  it('should return initialState if there is no given state', () => {

    const actual = reducers.favoritesReducer(undefined, {});

    expect(actual).toEqual(mockState);
  });

  it('should return an array of recipe objects when it receives the correct action', () => {
    const mockFavoritedRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    const expected = [...mockState, mockFavoritedRecipe];

    const actual = reducers.favoritesReducer(mockState, addToFavorites(mockFavoritedRecipe));

    expect(actual).toEqual(expected);
  });
});