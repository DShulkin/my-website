import React, { useState } from "react";
import projectsData from "../projects.json";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (id) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="accordion-container">
        {projectsData.projects.map((project) => {
          const isOpen = project.id === openIndex; // if the index matches openIndex its true, if not, false.

          return (
            <div className="accordion-item" key={project.id}>
              <button
                className="accordion-header"
                aria-expanded={isOpen} // comes out to true or false - aria-expanded={false}
                aria-controls={`accordion-content-${project.id}`} // can be read as: aria-controls="accordion-content 2"
                onClick={() => handleToggle(project.id)}
              >
                <h2 className="accordion-title">{project.title}</h2>
                <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
                  {isOpen ? "-" : "+"}
                </span>
              </button>

              <div
                id={`accordion-content-${project.id}`}
                className={`accordion-content ${isOpen ? "open" : ""}`}
                role="region"
                aria-labelledby={`accordion-item-${project.id}`}
                hidden={!isOpen}
              >
                <p>{project.content}</p>
                <svg className="projectIcon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M9.126.64a1.748 1.748 0 0 1 1.75 0l8.25 4.762c.103.06.199.128.286.206a.75.75 0 0 1 .554.96c.023.113.035.23.035.35v3.332a.75.75 0 0 1-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 0 1-1.125.65l-8.75-5.052a1.75 1.75 0 0 1-.875-1.515V6.917c0-.119.012-.236.035-.35a.749.749 0 0 1 .554-.96c.088-.078.184-.146.286-.205L9.126.639Zm.875 10.173v.001l7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0L2.251 6.34Zm-8.5-3.175v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path>
                <path d="m21.347 17.5-2.894-2.702a.75.75 0 1 1 1.023-1.096l4.286 4a.75.75 0 0 1 0 1.096l-4.286 4a.75.75 0 1 1-1.023-1.096L21.347 19h-6.633a.75.75 0 0 1 0-1.5h6.633Z"></path>
              </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
