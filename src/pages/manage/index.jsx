import React from 'react';
import Plus from '../../assets/plus.svg'
import Avatar from '../../assets/avatar.svg'
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
            <table className="manage__users">
                <tr className="manage__row">
                <th className = "col-2 manage__headers">Selected 2 users</th>
                <th className = "col-2 manage__headers">User ID</th>
                <th className = "col-2 manage__headers">Phone Number</th>
                <th className = "col-2 manage__headers">Email Address</th>
                <th className = "col-2 manage__headers">Account Created</th>
                </tr>
                <tr className="manage__row">
                    <td className=" col-2 user__row">
                        <img className="user__avatar" src={Avatar} alt="Avatar"/>
                        <span className="user__name">Makenova Ayday</span>
                    </td>
                    <td className="col-3 manage__headers" >DEV63016762</td>
                    <td className="col-3 manage__headers" >1-(618)312-3065</td>
                    <td className="col-3 manage__headers" >rsnyder@blogspan.gov</td>
                    <td className="col-3 manage__headers user__date" >04/28/2018</td>
                </tr>
            </table>
        </section>
    );
};
export default Manage;