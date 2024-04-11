import React from 'react';
import { Link } from 'react-router-dom';

function Notfoundpage() {
    return (
        <div>
            <h1>
                This page doesn't exist. Go <Link to='/'>Home</Link>
            </h1>
        </div>
    );
}

export default Notfoundpage;
