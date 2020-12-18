import React from 'react';
import Plus from '../../assets/plus.svg'
import './style.scss';
import Item from './items';
import axios from 'axios';

const Manage = () => {
    const [usersData, setUsersData] = React.useState([]);
    const [newUser, setNewUser] = React.useState({
        id: '',
        avatar: '',
        fullName: '',
        userID: '',
        email: '',
        phone: '',
        dateOfRegistry: '',
    });
    const [activeModal, setActiveModal] = React.useState(false);

    const handleClick = () => {
        setActiveModal(activeModal ? false : true);
    };

    React.useEffect(async () => {
        await axios
            .get(`http://localhost:3000/database.json`)
            .then((response) => response)
            .then(({ data }) => setUsersData(data.users));
    }, []);
    return (
        <section className="manage">
            {activeModal && (
                <div className="modal"> 
                    <form>
                        <input value={newUser.fullName} type="text" placeholder='Введите Имя Пользователя' />
                        <input value={newUser.avatar} type="text" placeholder='Введите путь к картинке' />
                        <input value={newUser.id} type="text" placeholder='Введите ID' />
                        <input value={newUser.phone} type="text" placeholder='Введите номер телефона' />
                        <input value={newUser.email} type="text" placeholder='Введите почту пользователя' />
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
                <button onClick={handleClick} className="manage__add-user">
                    <img src={Plus} alt="plus" />
                    ADD USER
                </button>
            </div>
            <table className="manage__users">
                <tr className="manage__row">
                    <th className="col-2 manage__headers">Selected 2 users</th>
                    <th className="col-2 manage__headers">User ID</th>
                    <th className="col-2 manage__headers">Phone Number</th>
                    <th className="col-2 manage__headers">Email Address</th>
                    <th className="col-2 manage__headers">Account Created</th>
                </tr>
                <Item users={usersData} />

            </table>
        </section>
    );
};
export default Manage;