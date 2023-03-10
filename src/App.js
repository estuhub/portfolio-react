// import react
import React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer'

// create component
class App extends React.Component{
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

// export react
export default App;
