import React from 'react';
import DayContainer from '../../containers/DayContainer';
import'./index.css';

const MenuCalendar = () => {
  return (
    <section class="menu">
      <h2>This Weeks Menu Plan</h2>
      <ul className="week">
        <li><h3>Sunday</h3><DayContainer day={'sunday'} /></li>
        <li><h3>Monday</h3><DayContainer day={'monday'} /></li>
        <li><h3>Tuesday</h3><DayContainer day={'tuesday'} /></li>
        <li><h3>Wednesday</h3><DayContainer day={'wednesday'} /></li>
        <li><h3>Thursday</h3><DayContainer day={'thursday'} /></li>
        <li><h3>Friday</h3><DayContainer day={'friday'} /></li>
        <li><h3>Saturday</h3><DayContainer day={'saturday'} /></li>
      </ul>
    </section>
  );
};

export default MenuCalendar;
