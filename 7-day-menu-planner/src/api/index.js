import { appID, key } from './api-keys.js'

const fetchRecipes = async (category) => {
    const response = await fetch(`https://api.edamam.com/search?q=${category}&app_id=${appID}&app_key=${key}`);

    if (response.status === 200) {
      return await response.json();
    } else {
      throw(new Error(`Error status code ${response.status}`))
    }
  }

export default fetchRecipes;