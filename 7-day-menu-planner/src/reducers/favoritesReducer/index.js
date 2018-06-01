const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.favoritedRecipe];
    default:
      return state;
  }
};

export default favoritesReducer;