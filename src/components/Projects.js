import React, { useState } from 'react'
import projectsData from '@/projects.json';

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
                  aria-controls={`accordion-content ${project.id}`} // can be read as: aria-controls="accordion-content 2"
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



/* 
  when a user clicks to open an accordion item, the code can be read as:
  const isOpen = 2 === 2 which results to "true"

  openIndex is a piece of state that indicates which accordion item is open (or null if none are open).
  So for the item whose id matches openIndex, isOpen will be true; for all other items, it’s false.
  This comparison happens during each render. Each time state or props change, React re-runs the component 
  function, re-executes the .map(), and recalculates isOpen for each item.
  const isOpen = project.id === openIndex; is evaluated for each description on every render.
*/

/*
    const handleToggle = (id) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
    This function is called when a user interacts with (clicks) an accordion button.
    The id passed to handleToggle identifies which accordion item is being toggled.
    This id is passed via the onClick handler for the corresponding button:
    onClick={() => handleToggle(id)}
    The id comes from the map function's id - using it as its index value.
*/

/*
  ----- Opening an accordion item: -----
  if a user clicks on say the second accordion item, the condition prevIndex === id can be read as:
  null === 2 which is false - setting the prevIndex to the index -  updating setOpenIndex to 2 
  |
  |
  v
  setOpenIndex((prevIndex) => (null === 2 ? null : 2));


  ----- Closing an accordion item: -----
  (2 === id ? null : id)
  If the users clicks the second accordion item to close it, can be read as (2 === 2 ? null : 2)
  This evaluates to "true" setting the prevIndex value to null - updating setOpenIndex to null.

  ----- -----
  If a user clicks on say the third accordion item while the second accordion item is open,
  the condition becomes: 2 === 3 which is false - updating setOpenIndex to 3 

  --- Alt condtional logic: ---
  condition can also be written as:
  prevIndex !== id ? index : null
*/

export default Projects

