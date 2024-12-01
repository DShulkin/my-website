import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <div className="contact-footer-container">
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App