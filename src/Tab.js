import React, { Component } from 'react';

class Tab extends Component {
    render() {
      return (
        <button className={this.props.active} onClick={this.props.sTab}>
        {this.props.content}
        </button>
      );
    }
  }
  
  export default Tab;