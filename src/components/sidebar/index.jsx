import React from 'react';
import userImg from '../../assets/user.png';
import Nav from './nav';
import QuestionIcon from '../../assets/question-icon.svg';
import './style.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <img src={userImg} className="sidebar__avatar"></img>
        <h3 className="sidebar__name">Roman Kutepov</h3>
        <span className="sidebar__position">Brain Director</span>
        </div>
        <hr />
      <Nav />
      <hr />
      <div className="sidebar__support">
        <span>Support</span>
        <a href="#">
          <img src={QuestionIcon} alt="support"/>
         <span>Support</span>
        </a>
      </div>
    </aside>
  )
}
export default Sidebar;