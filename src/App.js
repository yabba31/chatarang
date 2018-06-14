import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}


const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}


export default App;
