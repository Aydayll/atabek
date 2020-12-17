import React from 'react';
import Plus from '../../assets/plus.svg'
import './style.scss';

const Manage = () => {
    return (
        <section className="manage">
            <div className="manage__top">
                <div className="row">
                <div className="manage__filter">FILTER</div>
                <label className="manage__search">
                    <input type="text" placeholder='Search users by name, id' />
                </label>
                </div>
                <button className="manage__add-user">
                <img src={Plus} alt=""/>
                    ADD USER
                </button>
            </div>
            <table className="manage__users" border= '1'>
                <tr>
                <th className = "col-2">Selected 2 users</th>
                <th className = "col-2">User ID</th>
                <th className = "col-2">Phone Number</th>
                <th className = "col-2">Email Address</th>
                <th className = "col-2">Account Created</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
        </section>
    );
};
export default Manage;