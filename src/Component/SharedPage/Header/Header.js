import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>header</h2>
            <nav className=' navbar-fixed-top'>
            <Link to='/MainBody'>MainBody</Link>
            <Link to={'/Register'}>Register</Link>
                
            <Link to={'/Login'}>Login</Link>
            </nav>
        </div>
    );
};

export default Header;