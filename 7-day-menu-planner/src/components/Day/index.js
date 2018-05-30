import React from 'react';
import RecipeCard from '../RecipeCard';

const Day = ({ menu }) => {
  return (
    <section>
      <h6>Breakfast</h6>
      <RecipeCard recipe={menu.breakfast} displayAddToMenu={false} />
      <h6>Lunch</h6>
         <RecipeCard recipe={menu.lunch} displayAddToMenu={false} />
      <h6>Dinner</h6>
         <RecipeCard recipe={menu.dinner} displayAddToMenu={false} />
    </section>
  )
}

export default Day;
