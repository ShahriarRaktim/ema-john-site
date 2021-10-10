import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import UseAuth from '../Hooks/UseAuth';
import "./Header.css"

const Header = () => {
    const {user, logOut} = UseAuth();
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="./shop">Shop</NavLink>
                <NavLink to="./order">Order Review</NavLink>
                <NavLink to="./inventory">Manage Inventory here</NavLink>
               {
                    user.email ?
                    <>
                    <span style={{color: 'white'}}>Hello ! {user.displayName}</span>
                    <button
                    onClick={logOut}
                    >Logout</button>
                    </>
                   :
                   <NavLink to="./login">Login</NavLink>
               }
                
            </nav>
        </div>
    );
};

export default Header;