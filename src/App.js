import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div class="mainContainer">
      <Navbar />
      <div className="allSections">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App