import React from 'react';
import Items from './items';
import logo from '../../assets/logo.svg';
import './style.scss';

const Header = () => {
    return(
        <header className = "header">
           <div className="container">
               <div className="header__row">
                   <div className="header__logo"><a href="">
                       <img src={logo} alt=""/>
                       </a></div>
                       <div className="header__nav">
                          <Items />
                          </div>
                       <div className="header__btn">szdfcgvh;bj</div>
               </div>
           </div>
        </header>
    );
};

export default Header ;
