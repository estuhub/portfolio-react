// import react
import React from 'react';

// create component
class Nav extends React.Component{
  render() {
    return (
        <nav>
            <ul class="navigation">
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    )
  }
}

// export react
export default Nav;