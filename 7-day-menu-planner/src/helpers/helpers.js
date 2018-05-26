export const cleanData = (data) => {
  return data.hits.map(hit => {
    return {
      image: hit.recipe.image,
      url: hit.recipe.url,
      ingredients: hit.recipe.ingredientLines,
    }
  });
}