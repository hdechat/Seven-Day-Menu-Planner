export const cleanData = (data) => {
  return data.hits.map(hit => {
    return {
      tite: hit.recipe.label,
      image: hit.recipe.image,
      url: hit.recipe.url,
      ingredients: hit.recipe.ingredientLines
    }
  });
}