const initialState = [];

export const groceryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_GROCERY_LIST':
      return [...state, ...action.ingredients];
    default:
      return state;
  }
}

export default groceryListReducer;