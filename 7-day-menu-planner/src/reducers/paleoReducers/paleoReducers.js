//INITIAL FETCH TESTING, TO BE CHANGED TO 'RECIPES' REDUCER
export const fetchPaleoSuccessReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PALEO_SUCCESS':
      return [...state, ...action.recipes];
    default:
      return state;
  }
};

export const paleoIsLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'PALEO_IS_LOADING':
      return action.paleoIsLoading;
    default:
      return state;
  }
};

export const paleoHasErroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'PALEO_HAS_ERRORED':
      return action.paleoHasErrored;
    default:
      return state;
  }
};