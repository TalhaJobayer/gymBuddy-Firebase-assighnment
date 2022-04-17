import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>header</h2>
            <Link to={'/Register'}>Register</Link>
            <Link to={'/Login'}>Login</Link>
        </div>
    );
};

export default Header;