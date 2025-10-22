import React from 'react'
import Image from 'next/image'
import profilePhoto from '../assets/profile-photo.jpg'

function About() {
  return (
    <section id="about">
      <div className="about-hero">
        <h1 className="about-header">About</h1>
        <h2 className="about-name">David Chemrukov</h2>
        <div className="photo-wrapper">
          <Image className="profile-photo" src={profilePhoto} alt="Picture of David Chemrukov" />
        </div>
      </div>

      <div className='about-content'> 
        <div className='about-text'>
          <h3 className="role-header">Software Engineer / Graphic Designer</h3>
          <p>I'm driven by problem-solving and the challenge of simplifying complex ideas. I approach each project with creativity and a detective mindset—curious, precise, and determined to find the best solution.</p>
          <p>With a minimalist approach, I design visual frameworks that reflect the brand's essence and guide development toward cohesive, user-centric applications.</p>
          <p>Efficiency and scalability shape my work. I build reliable functionality and intuitive interactions, supported by thorough testing to ensure lasting performance.</p>
        </div>

        <div className='skills-container'>
          <h4 className="skills-header">Design:</h4>
          <p>Photoshop Illustrator Adobe XD Brand Identity Typography Grid Systems Web Design UX/UI</p>
        
          <h4 className="skills-header">Programming:</h4>
          <p>HTML (S)CSS Javascript Typescript (ES6+) Bootstrap Django React JSX next.js JSON APIs git Bash Shell XML</p>
          <img></img>
        </div>
      </div>
    </section>
  )
}

export default About
