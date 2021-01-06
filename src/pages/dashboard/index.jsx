import React from 'react';
import TopCards from './topCards';
import VerticalBar from './verticalBar';
import './style.scss';
const Dashboard = () => {
  return (
    <section>
      <div className='section__container'>
        <TopCards />
        <VerticalBar />
      </div>
    </section>
  );
};
export default Dashboard;