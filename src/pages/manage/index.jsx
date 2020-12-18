import React from 'react';
import Plus from '../../assets/plus.svg'
import './style.scss';
import Item from './items';

const Manage = ({data}) => {
    const [usersData, setUsersData] = React.useState(data);
    const [activeModal, setActive] = React.useState(false);
    const handleClick = () =>{
        console.log(data)
    };
    return (
        <section className="manage">
            {activeModal && (
            <div className="modal">
                <form>
                    <input type="text" placeholder = 'Введите Имя Пользователя'/>
                    <input type="text" placeholder = 'Введите картинку'/>
                    <input type="text" placeholder = 'Введите айди'/>
                    <input type="text" placeholder = 'Введите емаил'/>
                    <input type="text" placeholder = 'Введите номер'/>
                </form>
            </div>
            )}
            <div className="manage__top">
                <div className="row">
                <div className="manage__filter">FILTER</div>
                <label className="manage__search">
                    <input type="text" placeholder='Search users by name, id' />
                </label>
                </div>
                <button onClick={handleClick}className="manage__add-user">
                <img src={Plus} alt="plus"/>
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
                <Item users={data}/>
                
            </table>
        </section>
    );
};
export default Manage;