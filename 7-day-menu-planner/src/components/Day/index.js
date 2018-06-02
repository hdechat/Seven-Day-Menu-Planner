import React from 'react';
import RecipeCardContainer from '../../containers/RecipeCardContainer';
import './index.css';

const Day = ({ day, menu }) => {
  return (
    <section className="day">
      <h6>Breakfast</h6>
      <RecipeCardContainer recipe={menu[day].breakfast} displayAddToMenu={false} />

      <h6>Lunch</h6>
      <RecipeCardContainer recipe={menu[day].lunch} displayAddToMenu={false} />

      <h6>Dinner</h6>
      <RecipeCardContainer recipe={menu[day].dinner} displayAddToMenu={false} />
    </section>
  );
};

export default Day;
