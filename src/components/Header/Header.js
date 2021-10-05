import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="./shop">Shop</NavLink>
                <NavLink to="./order">Order Review</NavLink>
                <NavLink to="./inventory">Manage Inventory here</NavLink>
            </nav>
        </div>
    );
};

export default Header;