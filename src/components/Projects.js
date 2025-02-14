import React, { useState } from 'react'
import projectsData from '@/projects.json'

function Projects() {
  const [openIndex, setOpenIndex] = useState(null)
  const handleToggle = (id) => {
    setOpenIndex( (prevIndex) => (prevIndex === id ? null : id))
  }

  return (
    <section id="projects">
        <h1>Projects</h1>
        <div className="accordion-container">
          {projectsData.projects.map((project) => {
            const isOpen = project.id === openIndex // if the index matches openIndex its true, if not, false.
            
            return (
              <div className="accordion-item" key={project.id}> 
                  <button
                  className="accordion-header"
                  aria-expanded={isOpen} // comes out to true or false - aria-expanded={false}
                  aria-controls={`accordion-content-${project.id}`} // can be read as: aria-controls="accordion-content 2"
                  onClick={() => handleToggle(project.id)}
                  >
                    <h2 className="accordion-title">{project.title}</h2>  
                    <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  
                  <div
                    id={`accordion-content-${project.id}`}
                    className={`accordion-content ${isOpen ? 'open' : ''}`}
                    role="region"
                    aria-labelledby={`accordion-item-${project.id}`}
                    hidden={!isOpen}
                    >
                      <p>{project.content}</p>
                  </div>
              </div>
            )
          })}
        </div> 
    </section>
  )
}
export default Projects