// import react
import React from 'react';

// create component
class Skills extends React.Component{
  render() {
    return (
        <section id="skills">
            <h2 className="skills-header">Skills</h2>
            <div className="skills-wrapper">
                <div className="skills-card">
                    {/* <div>
                        <span className="skill-icon">Icon</span>            
                    </div> */}
                    <div>
                        <h3 className="skill-header">Web Development</h3>
                        <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime doloribus dolorem eius eum animi reiciendis autem omnis magni tempora aspernatur praesentium consequuntur consectetur at doloremque quas iste illum voluptatum.</p>
                        <h4 className="skill-place">Companies I worked with</h4>
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-tortuga_d3snuo.png" alt="logo" className="skill-logo" />
                    </div>
                </div>
                <div className="skills-card">
                    {/* <div>
                        <span className="skill-icon">Icon</span>            
                    </div> */}
                    <div>
                        <h3 className="skill-header">Data Analytics</h3>
                        <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime doloribus dolorem eius eum animi reiciendis autem omnis magni tempora aspernatur praesentium consequuntur consectetur at doloremque quas iste illum voluptatum.</p>
                        <h4 className="skill-place">Companies I worked with</h4>
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-adidas_dv5zn4.webp" alt="logo" className="skill-logo" />
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-nielsen_crk0c5.png" alt="logo" className="skill-logo" />
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-pg_eifh0g.jpg" alt="logo" className="skill-logo" />
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-unilever_xxlgvb.png" alt="logo" className="skill-logo" />
                    </div>
                </div>
                <div className="skills-card">
                    {/* <div>
                        <span className="skill-icon">Icon</span>            
                    </div> */}
                    <div>
                        <h3 className="skill-header">Hospitality</h3>
                        <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime doloribus dolorem eius eum animi reiciendis autem omnis magni tempora aspernatur praesentium consequuntur consectetur at doloremque quas iste illum voluptatum.</p>
                        <h4 className="skill-place">Companies I worked with</h4>
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-keg_kytrp9.png" alt="logo" className="skill-logo" />
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-araxi_sm4twy.jpg" alt="logo" className="skill-logo" />
                        <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-pangea_fwr53b.jpg" alt="logo" className="skill-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

// export react
export default Skills;