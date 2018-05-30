import React from 'react';
// import RecipeCard from '../RecipeCard';

const Day = ({ menu }) => {
  console.log(menu)
  return (
    <section>
      <h6>Breakfast</h6>
        <h1>{menu.breakfast.title}</h1>
        <img src={menu.breakfast.image} alt="recipe meal" />
        <a href={menu.breakfast.url}>{menu.breakfast.url}</a>
      <h6>Lunch</h6>
        <h1>{menu.lunch.title}</h1>
        <img src={menu.lunch.image} alt="recipe meal" />
        <a href={menu.lunch.url}>{menu.lunch.url}</a>
      <h6>Dinner</h6>
        <h1>{menu.dinner.title}</h1>
        <img src={menu.dinner.image} alt="recipe meal" />
        <a href={menu.dinner.url}>{menu.dinner.url}</a>
    </section>
  )
}

export default Day;

//if there is none should i have a default image? or try to remove image text reference?
