import React from 'react';
import '../styles/menu-icon.css';

function MenuIcon({ onClick, isToggled }) {
    return (
        <div className={`container ${isToggled ? 'change' : ''}`} onClick={onClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
}


export default MenuIcon;
