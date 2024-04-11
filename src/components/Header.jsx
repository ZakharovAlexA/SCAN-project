import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/header.css';
import logo from '../img/logo.svg';
import UseMenu from '../components/UserMenu';

function Header() {
    return (
        <>
            <header className='App-header'>
                <div>
                    <NavLink to={'/'} className='Logo'>
                        <img src={logo} alt='CKAH logo' />
                    </NavLink>
                </div>
                <div className='App-links'>
                    <NavLink to='/'>Главная</NavLink>
                    <NavLink to='/rates'>Тарифы</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                </div>
                <div>
                    <UseMenu />
                </div>
            </header>
        </>
    );
}

export default Header;
