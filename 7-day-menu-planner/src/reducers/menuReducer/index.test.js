import * as reducers from './index.js';
import { addToMenu } from '../../actions';

describe('Menu Reducer', () => {
  let mockState;

  beforeEach(() => {
    mockState = {};
  });

  it('should return initalState if there is no given state', () => {
    const actual = reducers.menuReducer(undefined, {});

    expect(actual).toEqual(mockState);
  });

  it('should return a recipe object for the correct day and mealtime when it receives the correct action', () => {
    const mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7a37f093d476",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    }

    const expected = {
      monday: {
        breakfast: mockRecipe
      }
    };

    const actual = reducers.menuReducer(mockState, addToMenu('monday', 'breakfast', mockRecipe));

    expect(actual).toEqual(expected);
  });
});