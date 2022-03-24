import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Meals</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/services">Serivces</a>
                <a href="/categories">Categories</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;