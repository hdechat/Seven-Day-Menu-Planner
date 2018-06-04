const initialState = [];

export const groceryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_GROCERY_LIST':
      return [...state, ...action.ingredients];
    case 'REMOVE_FROM_GROCERY_LIST':
      return state.filter(ingred => !action.ingredients.includes(ingred));
    case 'LOAD_GROCERY_LIST_TO_STORE':
      return [...state, ...action.groceryList];
    default:
      return state;
  }
};

export default groceryListReducer;