import React, { Component } from "react";
import TabContent from "./TabContent";
import "../../css/CustomerTab.css";

class CustomerTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewing: null,
      data: [
        {
          id: 0,
          Name: "Billy John",
          PhoneHome: 4506789292,
          PhoneCell: 4567890123,
          PhoneWork: 4508986754,
          SalesRep: "Jeff",
          Status: "Sold",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 345678",
          City: "Atlanta",
          State: "GA"
        },
        {
          id: 1,
          Name: "Billy John",
          PhoneHome: 4506789292,
          PhoneCell: 4567890123,
          PhoneWork: 4508986754,
          SalesRep: "Jeff",
          Status: "Sold",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 345678",
          City: "Atlanta",
          State: "GA"
        },
        {
          id: 2,
          Name: "Billy John",
          PhoneHome: 4506789292,
          PhoneCell: 4567890123,
          PhoneWork: 4508986754,
          SalesRep: "Jeff",
          Status: "Sold",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 345678",
          City: "Atlanta",
          State: "GA"
        },
        {
          id: 3,
          Name: "Billy John",
          PhoneHome: 4506789292,
          PhoneCell: 4567890123,
          PhoneWork: 4508986754,
          SalesRep: "Jeff",
          Status: "Sold",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 345678",
          City: "Atlanta",
          State: "GA"
        }
      ]
    };
  }
  render() {
    return (
      <div className="content">
        <TabContent data={this.state.data} />
      </div>
    );
  }
}

export default CustomerTab;
