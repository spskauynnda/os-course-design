import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import Monitor from './components/monitor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Monitor/>
      </div>
    );
  }
}

export default App;