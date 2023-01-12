// import react
import React from 'react';

// create component
class Projects extends React.Component{
  render() {
    return (
        <section id="projects">
            <h2>Some of my Recent Projects</h2>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2abd662597191.5a9589b09ddf5.jpg" alt="Google Logo" class="project-logo" />
                <h3>Google Search Clone</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut quibusdam fuga error nesciunt eaque saepe esse itaque voluptatibus praesentium architecto, distinctio iure doloribus nostrum. Molestias nulla enim nam amet.</p>
                <a href="https://github.com/">Check it out!</a>
            </div>
            <div>
                <img src="https://mumbrella.com.au/wp-content/uploads/2015/01/unnamed-1.jpg" alt="AirBnB Logo" class="project-logo" />
                <h3>Airbnb Clone</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut quibusdam fuga error nesciunt eaque saepe esse itaque voluptatibus praesentium architecto, distinctio iure doloribus nostrum. Molestias nulla enim nam amet.</p>
                <a href="https://github.com/">Check it out!</a>
            </div>
            <div>
                <img src="https://images-platform.99static.com//0CyRDgaZCtmsodP0_44A_kMQj2k=/129x79:877x827/fit-in/500x500/99designs-contests-attachments/91/91806/attachment_91806333" alt="FMT Logo" class="project-logo" />
                <h3>Follow My Trail</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut quibusdam fuga error nesciunt eaque saepe esse itaque voluptatibus praesentium architecto, distinctio iure doloribus nostrum. Molestias nulla enim nam amet.</p>
                <a href="https://github.com/">Check it out!</a>
            </div>
        </section>
    )
  }
}

// export react
export default Projects;