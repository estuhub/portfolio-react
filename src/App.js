// import react
import React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home';

// create component
class App extends React.Component{
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    )
  }
}

// export react
export default App;
