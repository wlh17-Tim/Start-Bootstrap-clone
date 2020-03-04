import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="logo">Start Bootstrap</h1>
        <>
              <nav className='header-links'>
                <p>SERVICES</p>
                <p>PORTFOLIO</p>
                <p>ABOUT</p>
                <p>TEAM</p>
                <p>CONTACT</p>
              </nav>
            </>
      </header>
    </div>
  );
}
}

export default App;