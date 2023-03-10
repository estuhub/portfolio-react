// import react
import React from 'react';

// create component
class About extends React.Component{
  render() {
    return (
        <section id="home">
            <div className="bio">
                <h1 className="bio-name">Hi, I'm Ester</h1>
                <p className="bio-title">Web Developer</p>
                <a className="bio-text" href="#contact">Contact me</a>
            </div>
        </section>
    )
  }
}

// export react
export default About;