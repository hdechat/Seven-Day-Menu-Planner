const initialState = {
  sunday: {
    breakfast: {},
    lunch: {},
    dinner: {}
  },
  monday: {
   breakfast: {},
    lunch: {},
    dinner: {}
  },
  tuesday: {
    breakfast: {},
    lunch: {},
    dinner: {}
  },
  wednesday: {
    breakfast: {},
    lunch: {},
    dinner: {}
  },
  thursday: {
    breakfast: {},
    lunch: {},
    dinner: {}
  },
  friday: {
    breakfast: {},
    lunch: {},
    dinner: {}
  },
  saturday: {
    breakfast: {},
    lunch: {},
    dinner: {}
  }
}

export const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_MENU' :
      return {...state, [action.weekday]: {...state[action.weekday], [action.mealTime]: action.recipe}};
    default:
      return state;
  }
}

export default menuReducer;
