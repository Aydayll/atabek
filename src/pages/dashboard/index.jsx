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
        <div className="row">
          <div className="col-9">
          <VerticalBar />
          </div>
          <div className="col-3">
          <Circle />
          </div>
        
        </div>
      </div>
    </section>
  );
};
export default Dashboard;