// import react
import React from 'react';

// create component
class Nav extends React.Component{
  render() {
    return (
        <nav>
            <ul className="navigation">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            {/* <button class="burger-menu" id="burger-menu">
                <ion-icon class="bars" name="menu-outline"></ion-icon>
            </button> */}
        </nav>
    )
  }
}

// export react
export default Nav;