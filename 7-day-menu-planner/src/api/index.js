import { appID, key } from './api-keys.js';

const fetchRecipes = async (lang, category, filter='') => {
  const response = await fetch(`https://${lang}.edamam.com/search?q=${category}&app_id=${appID}&app_key=${key}&from=0&to=100${filter}`);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw (new Error(`Error status code ${response.status}`));
  }
};

export const setToStorage = (key, object) => {
  const stringified = JSON.stringify(object);
  localStorage.setItem(key, stringified);
};

export const getDataFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export default fetchRecipes;
