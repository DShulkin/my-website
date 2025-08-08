import React, { useState } from 'react'
import useBreakpoint from '@/hooks/useBreakpoint';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useBreakpoint()

   const toggleDrawer = () => {
    if (!drawerOpen) {    
      // drawer is currently closed (drawerOpen === false) → opening it: add no-scroll to <body>
      document.body.classList.add('no-scroll')
    } else {          
      // drawer is currently open (drawerOpen === true) → closing it: remove no-scroll from <body>
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
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} onClick={handleDrawerClick}>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}> 
        {/* .drawer-content Prevents the drawer from closing if a user clicks anywhere on the screen that isnt a link */}
          <ul>
            <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
            <li><a href="#about" onClick={toggleDrawer}>About</a></li>
            <li><a href="#projects" onClick={toggleDrawer}>Projects</a></li>
            <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
          </ul>
        </div>
      </div>

      <nav className="navbar">
        {!isMobile && (
          <div className="logo">
            <svg id="logo" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 22.5 19.84"
              >
              <path d="M4.17,6.11c.16.07.32.14.49.21.91.39,1.81.78,2.72,1.17.09.04.17.11.23.18.5.64.99,1.28,1.48,1.92.27.35.27.48.02.85-.97,1.42-1.93,2.84-2.9,4.26-.16.24-.16.44-.01.63.15.18.36.22.62.11,2.98-1.31,5.96-2.62,8.93-3.94.58-.26,1.16-.51,1.74-.77.22-.09.37-.22.38-.47,0-.26-.16-.39-.38-.49-2.99-1.27-5.98-2.54-8.96-3.82-2.09-.9-4.17-1.8-6.26-2.71-.07-.03-.15-.08-.19-.15C1.4,2.11.73,1.12.07.14c-.02-.03-.03-.06-.07-.14.31.13.57.24.84.36,2.43,1.03,4.87,2.07,7.3,3.1,2.77,1.18,5.54,2.36,8.3,3.54,1.81.77,3.61,1.54,5.42,2.31.53.23.75.67.58,1.16-.09.26-.28.41-.52.52-1.02.45-2.04.9-3.06,1.34-3.22,1.42-6.44,2.84-9.65,4.26-2.39,1.05-4.79,2.1-7.17,3.17-.74.33-1.38-.26-1.3-.85.02-.16.09-.33.18-.46,1.55-2.29,3.11-4.58,4.67-6.87.29-.43.58-.85.87-1.28.28-.41.27-.76-.04-1.16-.72-.94-1.44-1.88-2.17-2.82-.04-.05-.08-.11-.12-.17,0-.01.02-.02.03-.03Z"/>
          </svg>
          </div> 
        )}
        
        {/* Only show hamburger and drawer on mobiile */}
        {isMobile && (
          <>
            <div className="hamburger-icon" onClick={toggleDrawer}>
              <span></span> 
              <span></span> 
              <span></span>
            </div>
          </>
        )}

        {/* Only show navbar-list on tablet screens sizes and up */}
        {!isMobile && (
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar