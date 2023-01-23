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
                <li><a href="#home" className="nav-link" onClick={() => setNavOpen(!navOpen)}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setNavOpen(!navOpen)}>About</a></li>
                <li><a href="#skills" className="nav-link" onClick={() => setNavOpen(!navOpen)}>Skills</a></li>
                <li><a href="#projects" className="nav-link" onClick={() => setNavOpen(!navOpen)}>Projects</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setNavOpen(!navOpen)}>Contact</a></li>
            </ul>
        </nav>
    )
}

// export react
export default Nav;