import React from 'react';

const Tab = props => {
  return(<button className={props.active} onClick={props.sTab}>
    {props.icon}
    {props.content}
    </button>);
}
  export default Tab;