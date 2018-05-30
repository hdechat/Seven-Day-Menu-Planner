import React from 'react';
import Day from '../Day';

const MenuCalendar = ({menu}) => {
  console.log(menu)
  return(
    <article>
      <h1>THIS WEEKS MENU PLAN</h1>
      <ul>
        <li>Sunday<Day menu={menu.sunday}/></li>
        <li>Monday<Day menu={menu.monday}/></li>
        <li>Tuesday<Day menu={menu.tuesday}/></li>
        <li>Wednesday<Day menu={menu.wednesday}/></li>
        <li>Thursday<Day menu={menu.thursday}/></li>
        <li>Friday<Day menu={menu.friday}/></li>
        <li>Saturday<Day menu={menu.saturday}/></li>
      </ul>
    </article>
  )
}

export default MenuCalendar;
