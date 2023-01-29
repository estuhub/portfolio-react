// import react
import React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// import React Hook
import { createContext, useState } from 'react';

// export ThemeContext
export const ThemeContext = createContext("null");

// create function
function App() {
    const [theme, setTheme] = useState("dark");
    // create a toggle function where it adds "dark" to the #id of the <div> that wraps everything
    const toggleTheme = () => {
      setTheme((curr) => (curr === "" ? "dark" : ""))
    };
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        {/* this theme will affect all the components below */}
        <div id={ theme }>
          <Nav />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    )
}

// export react
export default App;
