// import react
import React from 'react';

// create component
class Skills extends React.Component{
  render() {
    return (
        <section id="skills">
            <h2 className="header">My Top Skills</h2>
            <div className="skills-wrapper">
                <div className="skills-card">
                    <div>
                        <h3 className="skill-header">Web Development</h3>
                        <p className="skill-text">Currently working as a mentor for a coding bootcamp. Experience in developing web pages efficiently using React, JavaScript, HTML and CSS.</p>
                        <h4 className="skill-place">Companies I worked with</h4>
                        <a href="https://tortugacoders.com/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-tortuga_d3snuo.png" alt="logo" className="skill-logo" />
                        </a>
                    </div>
                </div>
                <div className="skills-card">
                    <div>
                        <h3 className="skill-header">Data Analytics</h3>
                        <p className="skill-text">Worked with data analysis for more than 10 years in retail and multinational consumer goods companies. Extensively worked developing decision-making dashboards and presentations. Expert using Microsoft Excel, Power BI and SAP.</p>
                        <h4 className="skill-place">Companies I worked with</h4>
                        <a href="https://www.adidas-group.com/en/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-adidas_dv5zn4.webp" alt="logo" className="skill-logo" />
                        </a>
                        <a href="https://www.nielsen.com/es/about-us/locations/argentina/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-nielsen_crk0c5.png" alt="logo" className="skill-logo" />
                        </a>
                        <a href="https://latam.pg.com/pg-argentina/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-pg_eifh0g.jpg" alt="logo" className="skill-logo" />
                        </a>
                        <a href="https://www.unilever-southlatam.com/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-unilever_xxlgvb.png" alt="logo" className="skill-logo" />
                        </a>
                    </div>
                </div>
                <div className="skills-card">
                    <div>
                        <h3 className="skill-header">Hospitality</h3>
                        <p className="skill-text">Worked as F&B Supervisor and Server over 4 years in boutique bars and fine dining restaurants. Successfully managed F&B inventories working in a fast-paced environment. Highly capable of solving problems under pressure and delivering a quality service.</p>
                        <h4 className="skill-place">Companies I worked with</h4>
                        <a href="https://thekeg.com/en" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-keg_kytrp9.png" alt="logo" className="skill-logo" />
                        </a>
                        <a href="https://www.araxi.com/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-araxi_sm4twy.jpg" alt="logo" className="skill-logo" />
                        </a>
                        <a href="https://www.pangeapod.com/" target="_blank" rel="noreferrer" className="skill-link">
                            <img src="https://res.cloudinary.com/dr28hft1z/image/upload/v1673832654/portfolio-react/logo-pangea_fwr53b.jpg" alt="logo" className="skill-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

// export react
export default Skills;