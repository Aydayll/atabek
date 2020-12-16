import React from 'react';

const Manage = () => {
    return (
        <section className="manage">
            <div className="manag__top">
                <div className="manage__filter"></div>
                <label className="manage__search">
                    <input type="text" placeholder='Search users by name, id' />
                </label>
                <div className="manage__add-user"></div>
            </div>
            <table className="manage__users"></table>
        </section>
    );
};
export default Manage;