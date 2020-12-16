import React from 'react';
import './style.scss';

const Manage = () => {
    return (
        <section className="manage">
            <div className="manag__top">
                <div className="manage__filter">FILTER</div>
                <label className="manage__search">
                    <input type="text" placeholder='Search users by name, id' />
                </label>
                <button className="manage__add-user"></button>
            </div>
            <table className="manage__users"></table>
        </section>
    );
};
export default Manage;