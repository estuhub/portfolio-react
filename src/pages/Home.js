// import react
import React from 'react';

// create component
class About extends React.Component{
  render() {
    return (
        <section id="home">
            <div className="bio">
                <span>Hello I'm</span>
                <h1 className="bio-name">Ester</h1>
                <h2 className="bio-title">Lorem ipsum dolor sit amet consectetur</h2>
                <p className="bio-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime doloribus dolorem eius eum animi reiciendis autem omnis magni tempora aspernatur praesentium consequuntur consectetur at doloremque quas iste illum voluptatum.</p>
            </div>
            <div>
                <img src="https://iso.500px.com/wp-content/uploads/2020/04/stock-photo-self-portraits-1013620750.jpg" alt="me" width="200" />
            </div>
        </section>
    )
  }
}

// export react
export default About;