import React, { useState } from 'react'
import d_logo from '../assets/icons/d_logo.svg'
import hamburgerMenu_offBlack from '../assets/icons/hamburgerMenu_offBlack.svg'
import '../Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navBar">
      <div className="logo">
        <img src={d_logo} alt="D Logo" />
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerMenu_offBlack} alt="Hamburger Menu" />
      </div>

      <ul className={`navbarList ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar
