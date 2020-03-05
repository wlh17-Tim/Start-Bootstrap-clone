import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleDropdown: false
    }
  }

  handleToggle = () => {
    this.setState({toggleDropdown: !this.state.toggleDropdown})
  }

  render(){
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="logo">Start Bootstrap</h1>
          {this.state.toggleDropdown
          ? (
        <>
              <span className='dropdown-toggle' onClick={this.handleToggle}>
                <p>MENU &#9776;</p>
                
                </span>
              <nav className='mobile-links'>
                <p>SERVICES</p>
                <p>PORTFOLIO</p>
                <p>ABOUT</p>
                <p>TEAM</p>
                <p>CONTACT</p>
              </nav>
            </>
          )
          : (
            <span className='dropdown-toggle' onClick={this.handleToggle}>
              <p>MENU &#9776;</p>
              
              </span>
          )
          }
          <nav className='header-links'>
                <p>SERVICES</p>
                <p>PORTFOLIO</p>
                <p>ABOUT</p>
                <p>TEAM</p>
                <p>CONTACT</p>
              </nav>
      </header>
      <div className='middle-text'>
        <p className='welcome'>Welcome To Our Studio!</p>
        <p className='meet'>IT'S NICE TO MEET YOU</p>
        <button className='tell-me-more'>
          TELL ME MORE
        </button>
      </div>
    </div>
  );
}
}

export default App;