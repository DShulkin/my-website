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

                  <button
                    onClick={() => window.open("https://takesYouToInteractiveProject", "_blank")}
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
                    onClick={() => window.open(`${project.gitHubLink}`, "_blank")}
                    aria-label="Go to GitHub"
                  >
                    <svg
                      className="project-icon"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                    </svg>
                  </button>
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