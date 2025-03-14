import React, { useState } from 'react'
import d_logo from '../assets/icons/d_logo.svg'
import hamburgerMenu from '../assets/icons/hamburgerMenu.svg'

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    if (!drawerOpen) { // When the drawer is closed (!drawerOpen is true), the function adds the no-scroll 
      document.body.classList.add('no-scroll')
    } else {          // When the drawer is open (drawerOpen is true), the function removes the no-scroll 
      document.body.classList.remove('no-scroll')
    }
    setDrawerOpen(!drawerOpen)
  }

  const closeDrawer = () => {
    document.body.classList.remove('no-scroll')
    setDrawerOpen(false)
  }

  const handleDrawerClick = (event) => {
    if (event.target.tagName === 'A') {
      event.stopPropagation()
    } else {
      closeDrawer()
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img {...d_logo} alt="D Logo" />
        </div>
        
        <div className="hamburger" onClick={toggleDrawer}>
          <img {...hamburgerMenu} alt="Hamburger Menu" />
        </div>

        <div className={`drawer ${drawerOpen ? 'open' : ''}`} onClick={handleDrawerClick}>
          <ul>
            <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
            <li><a href="#about" onClick={toggleDrawer}>About</a></li>
            <li><a href="#projects" onClick={toggleDrawer}>Projects</a></li>
            <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
          </ul>
        </div>

        <ul className="navbarList">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
