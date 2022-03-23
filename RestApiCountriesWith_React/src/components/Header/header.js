import React from 'react';
import './header.css';
const MenuBar = () => {
    return (
        <div>
            <h2>Welcome to my react website</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default MenuBar;