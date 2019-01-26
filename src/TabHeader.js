import React, { Component } from 'react';
import "./TabHeader.css";
import "./Tab";
import Tab from './Tab';
import styles from "./Tab.css";

const Dashboard = props => {
  return(<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill={props.color}/>
  </svg>);
}

const Customers = props => {
  return(<svg width="40" height="40" viewBox="0 0 24 24">
  <path fill={props.color} d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H8A2,2 0 0,1 6,16V4A2,2 0 0,1 8,2H20M17,7A3,3 0 0,0 14,4A3,3 0 0,0 11,7A3,3 0 0,0 14,10A3,3 0 0,0 17,7M8,15V16H20V15C20,13 16,11.9 14,11.9C12,11.9 8,13 8,15Z" />
</svg>);
}

const Analytics = props => {
  return(
    <svg width="40" height="40" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0V0z"/>
    </defs><clipPath id="b"><use href="#a" overflow="visible"/></clipPath>
    <path clip-path="url(#b)" fill={props.color} d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/></svg>
    );
}

const TabHeader = props => {
      return (
        <div className="TabHeader">
          <Tab 
            active={props.activeTab===1 ? styles.TabACT:styles.TabIN}
            sTab = {()=>props.changeTab(1)}
            content = 'Dashboard'
            icon = {<Dashboard color={(props.activeTab===1 ? "#57C185":"#576574")}/>}
            />
          <Tab 
            active={props.activeTab===2 ? styles.TabACT:styles.TabIN}
            sTab = {()=>props.changeTab(2)}
            content = 'Inventory'
            />
          <Tab 
            active={props.activeTab===3 ? styles.TabACT:styles.TabIN}
            sTab = {()=>props.changeTab(3)}
            content = 'Leads'
            />
          <Tab 
            active={props.activeTab===4 ? styles.TabACT:styles.TabIN}
            sTab = {()=>props.changeTab(4)}
            content = 'Customers'
            icon = {<Customers color={(props.activeTab===4 ? "#57C185":"#576574")}/>}
            />
            <Tab 
            active={props.activeTab===5 ? styles.TabACT:styles.TabIN}
            sTab = {()=>props.changeTab(5)}
            content = 'Analytics'
            icon = {<Analytics color={(props.activeTab===5 ? "#57C185":"#576574")}/>}
            />
        </div>
      );
    }
  
  
  export default TabHeader;