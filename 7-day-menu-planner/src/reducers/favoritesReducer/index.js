const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITES':
      return [...state, action.toggledRecipe];
    default:
      return state;
  }
};

export default favoritesReducer;
