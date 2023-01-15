// import react
import React from 'react';

// create component
class Projects extends React.Component{
  render() {
    return (
        <section id="projects">
            <h2 className="projects-title">Some of my Recent Projects</h2>
            <div className="projects-container">
                <div className="project-container project-card">
                    <img src="./images/Google-Search.png" alt="Google Screenshot" class="project-pic" />
                    <h3 className="project-title">Google Search Clone</h3>
                    <p className="project-details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione vel inventore labore commodi modi quos culpa aut saepe! Alias!</p>
                    <a href="https://github.com/" target="_blank" class="project-link">Check it out!</a>
                </div>
                <div className="project-container project-card">
                    <img src="./images/Airbnb-LoginSignup.png" alt="Airbnb Screenshot" class="project-pic" />
                    <h3 className="project-title">Airbnb Clone</h3>
                    <p className="project-details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione vel inventore labore commodi modi quos culpa aut saepe! Alias!</p>
                    <a href="https://github.com/" target="_blank" class="project-link">Check it out!</a>
                </div>
                <div className="project-container project-card">
                    <img src="./images/FMT-Location.png" alt="FMT Screenshot" class="project-pic" />
                    <h3 className="project-title">Follow My Trail</h3>
                    <p className="project-details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione vel inventore labore commodi modi quos culpa aut saepe! Alias!</p>
                    <a href="https://github.com/" target="_blank" class="project-link">Check it out!</a>
                </div>
            </div>
        </section>
    )
  }
}

// export react
export default Projects;