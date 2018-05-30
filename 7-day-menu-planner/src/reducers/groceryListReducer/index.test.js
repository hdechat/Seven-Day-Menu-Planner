import * as reducers from './index.js';
import { addToGroceryList } from '../../actions';

describe('Grocery List Reducer', () => {
  let mockState;

  beforeEach(() => {
    mockState = [];
  });

  it('should return initial state if there is no given state', () => {
    const actual = reducers.groceryListReducer(undefined, {});

    expect(actual).toEqual(mockState);
  });

  it('should return an array of ingredients when it receives the correct action', () => {
    mockState = ['last recipes ingredients'];
    const mockIngredients = [
      "1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", 
      "8 garlic cloves, peeled and smashed", 
      "⅓ cup apple cider vinegar", 
      "3 tablespoons tomato paste", 
      "3 tablespoons honey", 
      "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", 
      "1½ teaspoons kosher salt"
    ];

    const expected = [...mockState, ...mockIngredients];

    const actual = reducers.groceryListReducer(mockState, addToGroceryList(mockIngredients));

    expect(actual).toEqual(expected);
  });
});