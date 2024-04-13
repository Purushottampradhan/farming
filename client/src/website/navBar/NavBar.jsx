import React from 'react'
import "./NavBar.scss"
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="navbarContainer">
            <a className="navbar-brand" href="#">
                <img src="logo.svg" alt="" />
                ReactJS
            </a>

            <div className="navbarList">
                <NavLink to="/">
                    <div className="navbarItem">Home</div>
                </NavLink>
                <NavLink to="/about">
                    <div className="navbarItem">About</div>
                </NavLink>
                <div className='login-btn'>
                    Contact Us
                </div>
            </div>
        </nav>
    )
}

export default NavBar