import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/github_logo.png';
import '../Styling/Header.css';

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