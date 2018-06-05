import React from 'react';
import RecipeCardContainer from '../../containers/RecipeCardContainer';
import './index.css';

const Day = (props) => {
  const { 
    day, menu, removeFromMenu, removeFromGroceryList,
    removeGroceryListFromStorage, removeMenuItemFromStorage } = props;

  const handleClick = (mealTime) => {
    removeFromGroceryList(menu[day][mealTime].ingredients);
    removeGroceryListFromStorage(menu[day][mealTime].ingredients)
    removeFromMenu(day, mealTime);
    removeMenuItemFromStorage(day, mealTime, menu[day][mealTime])
  }

  return (
    <section className="day">
      <h6>Breakfast</h6>
      <button className={menu[day].breakfast.title ? "display" : "no-display"} onClick={()=>handleClick('breakfast')}>Remove Recipe</button>
      <RecipeCardContainer recipe={menu[day].breakfast} displayAddToMenu={false} displayLinkText={false} />

      <h6>Lunch</h6>
      <button className={menu[day].lunch.title ? "display" : "no-display"} onClick={()=>handleClick('lunch')}>Remove Recipe</button>
      <RecipeCardContainer recipe={menu[day].lunch} displayAddToMenu={false} displayLinkText={false} />

      <h6>Dinner</h6>
      <button className={menu[day].dinner.title ? "display" : "no-display"} onClick={()=>handleClick('dinner')}>Remove Recipe</button>
      <RecipeCardContainer recipe={menu[day].dinner} displayAddToMenu={false} displayLinkText={false} />
    </section>
  );
};

export default Day;
