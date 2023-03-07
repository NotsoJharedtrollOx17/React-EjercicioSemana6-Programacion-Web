import React from 'react';
import PropTypes from 'prop-types';
import '../Styling/Header.css';
import logo from '../images/github_logo.png';

function Header() {
    return(
        <div>
            <header className='Header-header'>
                <img src={logo} className="Header-logo" alt="logo"/>
            </header>
        </div>
    )
}

export default Header;