import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CRA SSR ROUTER V4 boilerplate</h1>
        </header>
        <p className="App-intro">
          Router is running.
        </p>
        <p className="App-intro">
          Location: {this.props.location.pathname}
        </p>
      </div>
    );
  }
}

export default App;
