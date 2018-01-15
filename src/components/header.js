import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom'

const Header=()=>(
    <div>
        <NavLink to="/"  activeClassName="selected" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="selected">Create</NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
        <NavLink to="/about" activeClassName="selected">About</NavLink>
        <NavLink to="/ant" activeClassName="selected">form</NavLink>

    </div>
);

export default Header;