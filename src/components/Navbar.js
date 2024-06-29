import React from 'react'
import d_logo from '../assets/icons/d_logo.svg'


function Navbar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={d_logo} alt="D Logo" />
      </div>
      <ul className="navbarList">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar