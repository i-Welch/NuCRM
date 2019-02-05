import React from 'react';
import "../css/TabHeader.css";
import "./Tab";
import Tab from './Tab';
import styles from "../css/Tab.css";

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

const Inventory = props => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-package">
    <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
    <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line></svg>
);
}

const Leads = props => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill={props.color} d="M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"/>
    </svg>
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
            icon = {<Inventory color={(props.activeTab===2 ? "#57C185":"#576574")}/>}
            />
          <Tab 
            active={props.activeTab===3 ? styles.TabACT:styles.TabIN}
            sTab = {()=>props.changeTab(3)}
            content = 'Leads'
            icon = {<Leads color={(props.activeTab===3 ? "#57C185":"#576574")}/>}
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