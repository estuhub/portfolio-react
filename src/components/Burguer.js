// import react
import React from 'react';
import { useState } from 'react'

const Burguer = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div>
            <div className="burguer-container" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "change burguer-bar1" : "burguer-bar1"}></div>
                <div className={navOpen ? "change burguer-bar2" : "burguer-bar2"}></div>
                <div className={navOpen ? "change burguer-bar3" : "burguer-bar3"}></div>
            </div>
        </div>
    )
}

// export react
export default Burguer;
