// PALEO ACTIONS
export const fetchPaleoSuccess = (recipes) => ({
  type: 'FETCH_PALEO_SUCCESS',
  recipes
});

export const paleoIsLoading = (bool) => ({
  type: 'PALEO_IS_LOADING',
  paleoIsLoading: bool
});