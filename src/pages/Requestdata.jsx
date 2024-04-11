import React from 'react';
import RequestForm from '../components/RequestForm.jsx';

import '../styles/Requestdata.css';
import requestPage from '../img/requestPage.svg';
import requestFolders from '../img/requestFolders.svg';
import requestRocket from '../img/requestRocket.svg';

function Requestdata() {
    return (
        <div className='requestContainer'>
            <div className='requestDataLeftFrame'>
                <h1>Найдите необходимые данные в пару кликов.</h1>
                <p>Задайте параметры поиска.</p>
                <p>Чем больше заполните, тем точнее поиск</p>
                <RequestForm />
            </div>
            <div className='requestDataRightFrame'>
                <img
                    className='requestPage'
                    src={requestPage}
                    alt='requestPage'
                />
                <img
                    className='requestFolders'
                    src={requestFolders}
                    alt='requestFolders'
                />
                <img
                    className='requestRocket'
                    src={requestRocket}
                    alt='requestRocket'
                />
            </div>
        </div>
    );
}

export default Requestdata;
