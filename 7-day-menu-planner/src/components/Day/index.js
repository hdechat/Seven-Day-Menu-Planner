import React from 'react';
import RecipeCardContainer from '../../containers/RecipeCardContainer';
import './index.css';

const Day = ({ menu }) => {
  return (
    <section className="day">
      <h6>Breakfast</h6>
      <RecipeCardContainer recipe={menu.breakfast} displayAddToMenu={false} />

      <h6>Lunch</h6>
      <RecipeCardContainer recipe={menu.lunch} displayAddToMenu={false} />

      <h6>Dinner</h6>
      <RecipeCardContainer recipe={menu.dinner} displayAddToMenu={false} />
    </section>
  );
};

export default Day;
