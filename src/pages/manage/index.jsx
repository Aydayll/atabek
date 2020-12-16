import React from 'react';
import Plus from '../../assets/plus.svg'
import './style.scss';

const Manage = () => {
    return (
        <section className="manage">
            <div className="manage__top">
                <div className="manage__filter">FILTER</div>
                <label className="manage__search">
                    <input type="text" placeholder='Search users by name, id' />
                </label>
                <button className="manage__add-user">
                <img src={Plus} alt=""/>
                    ADD USER
                </button>
            </div>
            <table className="manage__users"></table>
        </section>
    );
};
export default Manage;