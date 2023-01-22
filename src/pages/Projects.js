// import react
import React from 'react';

// create component
class Projects extends React.Component{
  render() {
    return (
        <section id="projects">
            <h2 className="header">Some of my Recent Projects</h2>
            <div className="projects-container">
                <div className="project-container project-1">
                    <a href="https://github.com/estuhub/google-search-react" target="_blank" rel="noreferrer" class="project-link">
                        <div className="project-overlay">
                            <h3 className="project-title">Google Search Clone</h3>
                            <p className="project-details">React - JSX - CSS - Express.js - Node.js - API - Axios - MongoDB</p>
                        </div>
                    </a>
                </div>
                <div className="project-container project-2">
                    <a href="https://github.com/estuhub/airbnb-mvc" target="_blank" rel="noreferrer" class="project-link">
                        <div className="project-overlay">
                            <h3 className="project-title">Airbnb Clone</h3>
                            <p className="project-details">MVC - HTML - CSS - JavaScript - BootStrap - Express.js - Node.js - MongoDB - Passport</p>
                        </div>
                    </a>
                </div>
                <div className="project-container project-3">
                    <a href="https://github.com/estuhub/follow-my-trail-react" target="_blank" rel="noreferrer" class="project-link">
                        <div className="project-overlay">
                            <h3 className="project-title">Follow My Trail</h3>
                            <p className="project-details">React - JSX - CSS - BootStrap - Node.js - GoogleMaps API - Axios - MongoDB</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
  }
}

// export react
export default Projects;