import React from 'react'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='navbar-items'>
                <ul>
                    <li>Home</li>
                    <li>Editions</li>
                    <li>Features</li>
                    <li>Options</li>
                </ul>
            </div>
            <div className='navbar-toggle'>
                <FaBars />
            </div>
        </div>
    </>
  )
}

export default Navbar