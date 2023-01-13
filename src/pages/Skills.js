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
                    </div>
                </div>
                <div className="skills-card">
                    {/* <div>
                        <span className="skill-icon">Icon</span>            
                    </div> */}
                    <div>
                        <h3 className="skill-header">Data Analytics</h3>
                        <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime doloribus dolorem eius eum animi reiciendis autem omnis magni tempora aspernatur praesentium consequuntur consectetur at doloremque quas iste illum voluptatum.</p>
                    </div>
                </div>
                <div className="skills-card">
                    {/* <div>
                        <span className="skill-icon">Icon</span>            
                    </div> */}
                    <div>
                        <h3 className="skill-header">Hospitality</h3>
                        <p className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime doloribus dolorem eius eum animi reiciendis autem omnis magni tempora aspernatur praesentium consequuntur consectetur at doloremque quas iste illum voluptatum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

// export react
export default Skills;