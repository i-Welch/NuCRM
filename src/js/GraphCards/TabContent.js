import React, { Component } from "react";
import TabDart from "./TabDart";
import BookPage from "./BookPage";
import { Paper } from "@material-ui/core";
import "../../css/TabContent.css";

export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }
  render() {
    return (
      <Paper>
        <div className="bookContainer">
          <div className="tabContainer">
            {this.props.data.map(Customer => (
              <TabDart
                key={Customer.id}
                id={Customer.id}
                data={Customer}
                activity={this.state.active === Customer.id}
                updActivity={upd => this.setState({ active: upd })}
              />
            ))}
          </div>
          <div className="bookPage">
            <BookPage
              data={this.props.data.find(obj => obj.id === this.state.active)}
            />
          </div>
        </div>
      </Paper>
    );
  }
}
