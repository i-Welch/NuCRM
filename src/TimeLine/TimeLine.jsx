import React, { PureComponent } from "react";

var classNames = require("classnames");

export default class TimeLine extends PureComponent {
  helper(data) {}

  render() {
    return <div className="container">{this.helper(this.props.data)}</div>;
  }
}
