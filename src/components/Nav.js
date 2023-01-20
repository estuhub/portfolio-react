// import react
import React from 'react';
import { useState } from 'react'

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav>
            <div className="burguer-container" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "change burguer-bar1" : "burguer-bar1"}></div>
                <div className={navOpen ? "change burguer-bar2" : "burguer-bar2"}></div>
                <div className={navOpen ? "change burguer-bar3" : "burguer-bar3"}></div>
            </div>
            <ul className={navOpen ? "" : "navigation"}>
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    )
}

// export react
export default Nav;