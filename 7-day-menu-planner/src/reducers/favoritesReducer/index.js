const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITES':
      const found = state.find(recipe => recipe.title === action.toggledRecipe.title)

      if(found) {
        return state.filter(recipe => recipe.title !== action.toggledRecipe.title)
      } else {
        return [...state, action.toggledRecipe]
      }
    case 'LOAD_FAVORITES_TO_STORE':
      return [...state, ...action.favorites]
    default:
      return state;
  }
};

export default favoritesReducer;
