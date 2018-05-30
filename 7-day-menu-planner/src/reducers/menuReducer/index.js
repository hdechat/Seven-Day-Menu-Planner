const weekdays = [
  'sunday', 
  'monday', 
  'tuesday', 
  'wednesday', 
  'thursday', 
  'friday', 
  'saturday'
];

const initialState = weekdays.reduce((state, day) => {
  return {...state, [day]: {
    breakfast: {},
    lunch: {},
    dinner: {}
  }};
}, {});

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_MENU' :
      return {...state, 
        [action.weekday]: {...state[action.weekday], 
          [action.mealTime]: action.recipe}};
    default:
      return state;
  }
};

export default menuReducer;
