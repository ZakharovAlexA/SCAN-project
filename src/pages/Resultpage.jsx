import React from 'react';
// import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import ObjectsearchHist from '../api/api.objectsearchHist';
import ObjectSearch from '../api/api.objectSearch';

import '../styles/Resultpage.css';
// import Spinner from '../components/Spinner';

function Resultpage() {
    const { state } = useLocation();

    return (
        <>
            <div className='resultPageContainer'>
                <h1>Ищем. Скоро будут результаты</h1>
                <p>
                    Поиск может занять некоторое время, просим сохранять
                    терпение.
                </p>
                <ObjectsearchHist dataIn={state.data} />
                <ObjectSearch dataIn={state.data} />
            </div>
        </>
    );
}

export default Resultpage;
