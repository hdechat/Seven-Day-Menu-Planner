import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const GroceryList = ({ groceryList }) => {
  const groceries = groceryList.map((foodItem, index) => {
    return (
      <li 
        className="food-item" 
        key={foodItem[0] + foodItem[1] + index}>
        <p>{foodItem}</p>
      </li>
    );
  });
  return (
    <section className="grocery-list">
      <h2>Grocery List</h2>
      <button 
        className="print" 
        onClick={() => window.print()}>PRINT LIST</button>
      <ul className="groceries">
        { groceries }
      </ul>
    </section>
  );
};

export default GroceryList;

GroceryList.propTypes = {
  groceryList: PropTypes.array
};