import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/footer.css';
import logofooter from '../img/logo-eqw.svg';

function Footer() {
    return (
        <footer className='App-footer'>
            <div>
                <NavLink to={'/'} className='Logo'>
                    <img src={logofooter} alt='CKAH logo' />
                </NavLink>
            </div>
            <div className='Contacts'>
                г. Москва, Цветной б-р, 40 <br />
                +7 495 771 21 11 <br />
                info@skan.ru
                <br />
                <br />
                Copyright. 2022
            </div>
        </footer>
    );
}

export default Footer;
