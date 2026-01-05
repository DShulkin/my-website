import React from 'react'
import Image from 'next/image'
import profilePhoto from '../assets/profile-photo2.jpg'

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h1 className="about-header">About</h1>
        <h2 className="about-name">David Chemrukov</h2>
        <h3 className="about-title">Front-End Engineer / Graphic Designer</h3>

        <div className="photo-wrapper">
          <Image className="profile-photo" src={profilePhoto} alt="Picture of David Chemrukov" />
        </div>

        <div className="about-intro">
          <p>I design and build digital experiences that make sense at a glance and feel effortless to use. Guided by restraint and structure, I let function lead every decision.</p>
        </div>

        <div className='about-paragraphs'>
          <p>I'm driven by problem-solving and the challenge of simplifying complex ideas. I approach every project with creativity and a detective's mindset—curious, precise, and determined to find the best solution.</p>
          <p>Inspired by Swiss Minimalism, I design visual frameworks that capture a brand's essence and direct development toward cohesive, user-centric applications.</p>
          <p>Efficiency and scalability shape my work. I build reliable functionality and intuitive interactions, supported by thorough testing to ensure long-term performance.</p>
        </div>

        <div className='skills-container'>
          <h4 className="skills-header">Programming:</h4>
          <p>HTML (S)CSS Javascript Typescript (ES6+) Bootstrap Django React JSX Next.js JSON APIs Git Bash Shell XML WCAG Accessibility</p>
          <h4 className="skills-header">Design:</h4>
          <p>Photoshop Illustrator Adobe XD Brand Identity Typography Grid Systems Web Design UX/UI</p>
        </div>
      </div>

    </section>
  )
}


// function About() {
//   return (
//     <section id="about">
//       <div className="about-hero">
//         <h1 className="about-header">About</h1>
//         <h2 className="about-name">David Chemrukov</h2>
//         <div className="photo-wrapper">
//           <Image className="profile-photo" src={profilePhoto} alt="Picture of David Chemrukov" />
//         </div>
//       </div>

//       <div className='about-content'> 
//         <div className='about-text'>
//           <h3 className="role-header">Software Engineer / Graphic Designer</h3>
//           <p>I guide users through visual design and typography. My work leans toward clarity—clean layouts, honest structure, and direct communication. I build digital experiences that make sense at a glance and feel effortless to use.</p>
//             <div className='about-paragraphs'>
//               <p>I’m driven by problem-solving and the challenge of simplifying complex ideas. I approach each project with creativity and a detective mindset—curious, precise, and focused on finding the best solution.</p>
//               <p>Inspired by Swiss Minimalism, I design visual frameworks that reflect the brand's essence and guide development toward cohesive, user-centric applications.</p>
//               <p>Efficiency and scalability shape my work. I build reliable functionality and intuitive interactions, supported by thorough testing to ensure long term reliability.</p>
//           </div>
//         </div>

//         <div className='skills-container'>
//           <h4 className="skills-header">Programming:</h4>
//           <p>HTML (S)CSS Javascript Typescript (ES6+) Bootstrap Django React JSX next.js JSON APIs git Bash Shell XML WCAG Accessibility</p>

//           <h4 className="skills-header">Design:</h4>
//           <p>Photoshop Illustrator Adobe XD Brand Identity Typography Grid Systems Web Design UX/UI</p>
//           <img></img>
//         </div>
//       </div>
//     </section>
//   )
// }

export default About
