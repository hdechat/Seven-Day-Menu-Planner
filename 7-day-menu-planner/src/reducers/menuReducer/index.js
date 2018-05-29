const initialState = {}

export const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_MENU' :
      return {...state, [action.weekday]: {[action.mealTime]: action.recipe}};
    default:
      return state;
  }
}

export default menuReducer;
