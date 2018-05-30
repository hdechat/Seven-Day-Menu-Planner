import React from 'react';
import Day from '../Day';

const MenuCalendar = (props) => {
  return(
    <article>
      <h1>THIS WEEKS MENU PLAN</h1>
      <ul>
        <li>Sunday<Day menu={props.sunday}/></li>
        <li>Monday<Day menu={props.monday}/></li>
        <li>Tuesday<Day menu={props.tuesday}/></li>
        <li>Wednesday<Day menu={props.wednesday}/></li>
        <li>Thursday<Day menu={props.thursday}/></li>
        <li>Friday<Day menu={props.friday}/></li>
        <li>Saturday<Day menu={props.saturday}/></li>
      </ul>
    </article>
  )
}

export default MenuCalendar;