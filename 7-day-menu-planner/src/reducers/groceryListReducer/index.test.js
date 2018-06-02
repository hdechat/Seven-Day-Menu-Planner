import * as reducers from './index.js';
import { addToGroceryList, removeFromGroceryList } from '../../actions';

describe('Grocery List Reducer', () => {
  let mockState;
  let mockIngredients;

  beforeEach(() => {
    mockState = [];

    mockIngredients = [
      "1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", 
      "8 garlic cloves, peeled and smashed", 
      "⅓ cup apple cider vinegar", 
      "3 tablespoons tomato paste", 
      "3 tablespoons honey", 
      "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", 
      "1½ teaspoons kosher salt"
    ];
    
  });

  it('should return initial state if there is no given state', () => {
    const actual = reducers.groceryListReducer(undefined, {});

    expect(actual).toEqual(mockState);
  });

  it('should add an array of ingredients when it receives the addToGroceryList action', () => {
    mockState = ['last recipes ingredients'];

    const expected = [...mockState, ...mockIngredients];

    const actual = reducers.groceryListReducer(mockState, addToGroceryList(mockIngredients));

    expect(actual).toEqual(expected);
  });

  it('should remove an array of ingredients when it receives the removeFromGroceryList action', () => {
    mockState = mockIngredients;

    const actual = reducers.groceryListReducer(mockState, removeFromGroceryList(mockIngredients));

    expect(actual).toEqual([]);
  });
});