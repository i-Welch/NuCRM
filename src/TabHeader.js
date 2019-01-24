import React, { Component } from 'react';
import "./TabHeader.css";
import "./Tab";
import Tab from './Tab';
import styles from "./Tab.css";
import UserBar from "./UserBar.js"


class TabHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab: 1,
        };
    }

    render() {
      return (
        <div className="TabHeader">
          <div className="tabContainer">
          <Tab 
            active={this.state.activeTab===1 ? styles.TabACT:styles.TabIN}
            sTab = {()=>this.setState({activeTab: 1})}
            content = 'Dashboard'
            />
          <Tab 
            active={this.state.activeTab===2 ? styles.TabACT:styles.TabIN}
            sTab = {()=>this.setState({activeTab: 2})}
            content = 'Inventory'
            />
          <Tab 
            active={this.state.activeTab===3 ? styles.TabACT:styles.TabIN}
            sTab = {()=>this.setState({activeTab: 3})}
            content = 'Leads'
            />
          <Tab 
            active={this.state.activeTab===4 ? styles.TabACT:styles.TabIN}
            sTab = {()=>this.setState({activeTab: 4})}
            content = 'Customers'
            />
            </div>
            <UserBar></UserBar>
        </div>
      );
    }
  }
  
  export default TabHeader;