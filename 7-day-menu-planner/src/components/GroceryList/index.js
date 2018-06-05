import React from 'react';
import './index.css'

const GroceryList = ({ groceryList }) => {
  const groceries = groceryList.map((foodItem, index) => {
    return (
      <li className="food-item" key={foodItem[0] + foodItem[1] + index}><p>{foodItem}</p></li>
    )
  });
  return (
    <section className="grocery-list">
      <h2>Grocery List</h2>
      <ul className="groceries">
        { groceries }
      </ul>
    </section>
  )
}

export default GroceryList;
