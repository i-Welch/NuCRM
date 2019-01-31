import React from 'react';
import "./TabPage.css";
import DashTab from './Dashtab'
import InventoryTab from './InventoryTab';

const TabPage = props => {
  switch(props.activeTab){
    case 1: 
      return(<DashTab/>);
    case 2:
      return(<InventoryTab/>);
    case 3:
      return(<p>3</p>);
    case 4:
      return(<p>4</p>);
    case 5:
      return(<p>5</p>);
    default:
      return(<p>error try reloading</p>);
  }
}
  
  export default TabPage;