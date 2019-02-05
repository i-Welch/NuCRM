import React, { Component } from 'react';
import "../css/UserBar.css";
import logo from "./User.png";

class UserBar extends Component {
    render() {
      return (
        <div className="UserBar" onClick={()=>alert('User profile')}>
            <div className = "Userdiv">
            <img width="35" height="35" src={logo} alt="Logo"/>
            </div>
            <div className="ueBox">
            <p className="ue">Username</p>
            <p className="ue">Dealership</p>
            </div>
        </div>
      );
    }
  }
  
  export default UserBar;