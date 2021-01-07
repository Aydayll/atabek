import React from 'react';
import TopCards from './topCards';
import VerticalBar from './verticalBar';
import Circle from './circle'
import './style.scss';
const Dashboard = () => {
  return (
    <section>
      <div className='section__container'>
        <TopCards />
        <VerticalBar />
        <Circle />
      </div>
    </section>
  );
};
export default Dashboard;