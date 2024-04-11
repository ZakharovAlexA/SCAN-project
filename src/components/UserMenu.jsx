import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/UserMenu.css';
import AuthStore from '../store/Store';
import { observer } from 'mobx-react';
import InfoPanel from './InfoPanel';
import Avatar from '../img/avatar.svg';

function UserMenu() {
    const isAuth = AuthStore.isAuth;
    const signout = AuthStore.logout;
    const navigate = useNavigate();
    const handleLogout = () => {
        signout();
        navigate('/');
    };

    if (isAuth) {
        return (
            <div className='AuthUser'>
                <div className='InfPanel'>
                    <InfoPanel />
                </div>
                <div className='InfUser'>
                    <p className='UserName'>Алексей А.</p>
                    <Link
                        className='LogoutLink'
                        onClick={handleLogout}
                        to={'/'}
                    >
                        Выйти
                    </Link>
                </div>
                <img src={Avatar} alt='avatar' />
            </div>
        );
    } else {
        return (
            <div className='unAuthUser'>
                <p>Зарегитстрироваться</p>
                <div className='vr'></div>
                <Link to={'/login'}>
                    <button className='BttnPanel'>Войти</button>
                </Link>
            </div>
        );
    }
}

export default observer(UserMenu);
