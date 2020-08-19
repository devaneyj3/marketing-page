import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Navigation = () => {
    return (
        <Nav>
            <NavLink to="/home">Home</NavLink> 
            <NavLink to='/about'>About</NavLink> 
            <NavLink to="/contact">Contact</NavLink> 
        </Nav>
    )
}

export default Navigation;
