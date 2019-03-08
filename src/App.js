import React, { Component } from "react";
import "./css/App.css";
import TabHeader from "./js/TabHeader.js";
import TabPage from "./js/TabPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  render() {
    return (
      <div className="App">
        <TabHeader
          activeTab={this.state.activeTab}
          changeTab={x => this.setState({ activeTab: x })}
        />
        <TabPage className="content" activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default App;
