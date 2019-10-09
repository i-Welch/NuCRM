import React, { PureComponent } from "react";
import "../../css/TabDart.css";
var classNames = require("classnames");

export default class TabDart extends PureComponent {
  render() {
    return (
      <div
        onClick={() => this.props.updActivity(this.props.id)}
        className={classNames("tabDart", this.props.data.Status, {
          active: this.props.activity
        })}
      >
        <div
          className={classNames("dataFormat", this.props.data.Status, {
            active: this.props.activity
          })}
          onClick={() => this.props.updActivity(this.props.id)}
        >
          <h3>{this.props.data.firstName + " " + this.props.data.lastName}</h3>
          <p>{this.props.data.Status}</p>
        </div>
      </div>
    );
  }
}
