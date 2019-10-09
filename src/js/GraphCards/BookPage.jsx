import React, { PureComponent } from "react";
import { Paper } from "@material-ui/core";
import TimeLine from "./TimeLine";
import "../../css/BookPage.css";
import { format } from "date-fns";
import Home from "../../resources/Icons/Home";
import Cell from "../../resources/Icons/Cell";
import Work from "../../resources/Icons/Work";
export default class BookPage extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="graphs">
          <TimeLine />
        </div>
        <div className="content">
          <h3>Customer:</h3>
          <div>{this.props.data ? this.props.data.Name : "Off"}</div>
          <div>{this.props.data ? this.props.data.SalesRep : "Off"}</div>
          <div>{this.props.data ? this.props.data.Status : "Off"}</div>
          <div>{this.props.data ? this.props.data.Name : "Off"}</div>
          <div>
            {this.props.data
              ? format(this.props.data.LastContacted, "MM/dd/yyyy")
              : "Off"}
          </div>
        </div>
        <Paper className="contact">
          <h3>Contact Info:</h3>
          <div>
            <Home />: {this.props.data ? this.props.data.phone : "Off"}
          </div>
          <div>
            <Cell />: {this.props.data ? this.props.data.PhoneCell : "Off"}
          </div>
          <div>
            <Work />: {this.props.data ? this.props.data.PhoneWork : "Off"}
          </div>
          <div>{this.props.data ? this.props.data.address : "Off"}</div>
          <div>
            {this.props.data ? this.props.data.City : "Off"}
            {", "}
            {this.props.data ? this.props.data.State : "Off"}
          </div>
        </Paper>
        <div className="sales" />
      </div>
    );
  }
}
