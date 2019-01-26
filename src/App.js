import React, { Component } from 'react';
import './App.css';
import TabHeader from './TabHeader.js';
import TabPage from './TabPage';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        activeTab: 1,
    };
}

  render() {
    return (
      <div className="App">
        <TabHeader 
        activeTab={this.state.activeTab}
        changeTab={(x)=>this.setState({activeTab:x})}
        />
        <TabPage activeTab={this.state.activeTab}/>
      </div>
    );
  }
}

export default App;
