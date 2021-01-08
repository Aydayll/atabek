import React from 'react';
import TopCards from './topCards';
import VerticalBar from './verticalBar';
import CircleChart from './circle'
import './style.scss';
const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='section__container'>
        <TopCards />
        <div className="row">
          <div className="col-9">
            <div className="dashboard__item">
              <VerticalBar />
            </div>
          </div>
          <div className="col-3">
            <div className="dashboard__item">
              <CircleChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;