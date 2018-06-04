import React from 'react';
import DayContainer from '../../containers/DayContainer';
import'./index.css';

const MenuCalendar = () => {
  return (
    <section className="menu">
      <h2>THIS WEEKS MENU PLAN</h2>
      <ul className="week">
        <li>Sunday<DayContainer day={'sunday'} /></li>
        <li>Monday<DayContainer day={'monday'} /></li>
        <li>Tuesday<DayContainer day={'tuesday'} /></li>
        <li>Wednesday<DayContainer day={'wednesday'} /></li>
        <li>Thursday<DayContainer day={'thursday'} /></li>
        <li>Friday<DayContainer day={'friday'} /></li>
        <li>Saturday<DayContainer day={'saturday'} /></li>
      </ul>
    </section>
  );
};

export default MenuCalendar;
