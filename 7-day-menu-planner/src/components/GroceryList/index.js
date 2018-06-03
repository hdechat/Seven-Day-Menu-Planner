import React from 'react';

const GroceryList = ({ groceryList }) => {
  const groceries = groceryList.map((foodItem, index) => {
    return (
      <p key={foodItem[0] + foodItem[1] + index}>{foodItem}</p>
    )
  });
  return (
    <section className="grocery-list">
      <h1>GROCERY LIST</h1>
      { groceries }
    </section>
  )
}

export default GroceryList;