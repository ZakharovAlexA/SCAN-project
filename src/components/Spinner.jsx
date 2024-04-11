import React from 'react';
import { ReactComponent as SpinnerSVG } from '../img/spinner.svg';
import '../styles/Spinner.css';

const Spinner = ({ extClass }) => {
    return <SpinnerSVG className='spinner' />;
};

export default Spinner;
