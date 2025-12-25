import React, { useState } from 'react'
import useBreakpoint from '../hooks/useBreakpoint'
import ApiDirectory from './projects/ApiDirectory'
import projectsData from '../data/projects.json'


function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  const { isDesktop } = useBreakpoint()

  const handleToggle = (id) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id))
    /* 
    No project is currently open:     prevIndex === id → null === 2 → false.     setOpenIndex(2) → opens Project 2
    Project 2 is currently open:      prevIndex === id → 2 === 2 → true.         setOpenIndex(null) → closes Project 2
    */
  }

  return (
    <section id="projects">
      <h1>Projects</h1>
      
      <div className="projects-container">
        <div className="accordion-container">
          {projectsData.projects.map((project) => {
            const isOpen = project.id === openIndex  
            /* 
              The project.id should match the open index. → boolean returns true → (is open) 
              ie:, do any of the project ID's match the open index?
              
              vice versa:

              The open index should match project.id → boolean returns true → (is open)
              ie:, does the open index match any of the project ID's?
            */
           
            return (
              <div className="accordion-item" key={project.id}>
                <button
                  className="accordion-header"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${project.id}`}
                  onClick={() => handleToggle(project.id)}
                >
                  <h2 className="accordion-title">{project.title}</h2>
                  <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
                    <span className="horizontal-line"></span>
                    <span className="vertical-line"></span>
                    {/* {isOpen ? "-" : "+"} */}
                  </span>
                </button>

                <div inert={!isOpen}
                  id={`accordion-content-${project.id}`}
                  className={`accordion-content ${isOpen ? "open" : ""}`}
                  role="region"
                  aria-labelledby={`accordion-item-${project.id}`}
                >
                  <p>{project.content}</p>
                  <div className="icon-container">
                    <button
                      onClick={() => window.open(project.demo, "_blank")}
                      aria-label="View Interactive Project"
                    >
                      <svg
                        className="project-icon"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.126.64a1.748 1.748 0 0 1 1.75 0l8.25 4.762c.103.06.199.128.286.206a.75.75 0 0 1 .554.96c.023.113.035.23.035.35v3.332a.75.75 0 0 1-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 0 1-1.125.65l-8.75-5.052a1.75 1.75 0 0 1-.875-1.515V6.917c0-.119.012-.236.035-.35a.749.749 0 0 1 .554-.96c.088-.078.184-.146.286-.205L9.126.639Zm.875 10.173v.001l7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0L2.251 6.34Zm-8.5-3.175v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path>
                        <path d="m21.347 17.5-2.894-2.702a.75.75 0 1 1 1.023-1.096l4.286 4a.75.75 0 0 1 0 1.096l-4.286 4a.75.75 0 1 1-1.023-1.096L21.347 19h-6.633a.75.75 0 0 1 0-1.5h6.633Z"></path>
                      </svg>
                    </button>

                    <button
                      onClick={() => window.open(project.gitHubLink, "_blank")}
                      aria-label="Go to GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="social-icon"
                        fill="currentColor"
                      >
                        <path d="M12,.2C5.4.2,0,5.6,0,12.3s3.4,9.9,8.2,11.5c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7,0-.7,0-.7,1.2.1,1.8,1.2,1.8,1.2,1.1,1.8,2.8,1.3,3.5,1,.1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6s.5-2.4,1.2-3.2c0-.3-.5-1.6.2-3.2,0,0,1-.3,3.3,1.2,1-.3,2-.4,3-.4s2,.2,3,.4c2.3-1.6,3.3-1.2,3.3-1.2.7,1.7.2,2.9.1,3.2.8.8,1.2,1.9,1.2,3.2,0,4.6-2.8,5.7-5.5,6,.4.4.8,1.1.8,2.2v3.3c0,.3.2.7.8.6,4.8-1.6,8.2-6.1,8.2-11.5C24,5.6,18.6.2,12,.2Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 
          Loop through each item in the projects array and find the one with an id matching openIndex
          If a match is found, return that project's projectImage value
        */}
          
        {openIndex !== null && isDesktop && (
          <ApiDirectory 
            projectImage = {
              projectsData.projects.find((project) => project.id === openIndex)?.projectImage
            }
          />
        )}

      </div>
    </section>
  )
}

export default Projects