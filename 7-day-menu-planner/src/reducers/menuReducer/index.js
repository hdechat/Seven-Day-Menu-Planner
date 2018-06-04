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
    case 'REMOVE_FROM_MENU':
      return {...state,
        [action.weekday]: {...state[action.weekday],
          [action.mealTime]: {}}}
    case 'LOAD_MENU_TO_STORE':
      return action.menu.reduce((updatedState, item) => {
        const key = Object.keys(item);
        const meal = Object.keys(item[key[0]]);
        return {...updatedState, [key[0]]: {...updatedState[key[0]],
            [meal[0]]: item[key[0]][meal[0]]}};
      }, initialState);
    default:
      return state;
  }
};

export default menuReducer;
