import React, { Component } from 'react';
import './App.css';
import TabHeader from './TabHeader.js';
import TabPage from './TabPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TabHeader></TabHeader>
        <TabPage></TabPage>
      </div>
    );
  }
}

export default App;
