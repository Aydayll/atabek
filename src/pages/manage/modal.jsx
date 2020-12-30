import React from 'react'

const modal = () => {
    return (
        <div>
            <div ref={modalWrapperRef} className='modal__wrapper'>
                <div ref={modaRef} className='modal'>
                    <div className='col-6 modal__left'>
                        <div onClick={() => setActiveModal(false)}>
                            <BtnGoBack />
                        </div>
                        <h3 className='modal__title'>Create a new user</h3>
                        <h6 className='modal__suptitle'>Add main information about user</h6>
                        <form className='modal__form' onSubmit={(event) => handleSubmit(event)}>
                            <label className='modal__label' htmlFor=''>
                                <input
                                    required
                                    onChange={(event) => saveData(event)}
                                    value={newUser.fullName}
                                    type='text'
                                    placeholder='Введите Имя Пользователя'
                                />
                                <p>Имя пользователя</p>
                            </label>
                            <label htmlFor='' className='modal__label'>
                                <input
                                    required
                                    onChange={(event) => saveData(event)}
                                    value={newUser.avatar}
                                    type='text'
                                    placeholder='Введите путь к картинке'
                                />
                                <p>Картинка</p>
                            </label>
                            <label htmlFor='' className='modal__label'>
                                <input
                                    required
                                    onChange={(event) => saveData(event)}
                                    value={newUser.userID}
                                    type='text'
                                    placeholder='Введите ID'
                                />
                                <p>ID</p>
                            </label>
                            <label htmlFor='' className='modal__label'>
                                <input
                                    required
                                    onChange={(event) => saveData(event)}
                                    value={newUser.phone}
                                    type='text'
                                    placeholder='Введите номер телефона'
                                />
                                <p>Номер телефона</p>
                            </label>
                            <label htmlFor='' className='modal__label'>
                                <input
                                    required
                                    onChange={(event) => saveData(event)}
                                    value={newUser.email}
                                    type='text'
                                    placeholder='Введите почту пользователя'
                                />
                                <p>Почта пользователя</p>
                            </label>
                            <button className='btn-blue form__btn'>Add New User</button>
                        </form>
                    </div>
                    <div className='col-6 text-right'>
                        <img className='modal__right' src={modalRight} alt='modalRight' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal
