import React from 'react';
import RecipeCardContainer from '../../containers/RecipeCardContainer';
import './index.css';

const Day = ({ day, menu, removeFromMenu, removeFromGroceryList }) => {
  
  const handleClick = (mealTime) => {
    removeFromGroceryList(menu[day][mealTime].ingredients);
    removeFromMenu(day, mealTime);
  }

  return (
    <section className="day">
      <h6>Breakfast</h6>
      <button onClick={()=>handleClick('breakfast')}>Remove Recipe</button>
      <RecipeCardContainer recipe={menu[day].breakfast} displayAddToMenu={false} />

      <h6>Lunch</h6>
      <button onClick={()=>handleClick('lunch')}>Remove Recipe</button>
      <RecipeCardContainer recipe={menu[day].lunch} displayAddToMenu={false} />

      <h6>Dinner</h6>
      <button onClick={()=>handleClick('dinner')}>Remove Recipe</button>
      <RecipeCardContainer recipe={menu[day].dinner} displayAddToMenu={false} />
    </section>
  );
};

export default Day;
