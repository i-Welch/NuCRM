import React, { PureComponent } from "react";
import TabDart from "./TabDart";
import { Paper } from "@material-ui/core";

export default class TabContent extends PureComponent {
  render() {
    return (
      <div className="bookContainer">
        <Paper>
          <div className="tabContainer">
            {this.props.data.map(Customer => (
              <TabDart data={Customer} />
            ))}
          </div>
          <div className="bookPage" />
        </Paper>
      </div>
    );
  }
}
