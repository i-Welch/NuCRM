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
          PhoneHome: "(450) 678-9292",
          PhoneCell: "(456) 789-0123",
          PhoneWork: "(450) 898-6754",
          SalesRep: "Jeff",
          Status: "Sold",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(2014, 1, 11),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 34578",
          City: "Atlanta",
          State: "GA"
        },
        {
          id: 1,
          Name: "Billy John",
          PhoneHome: 4506789292,
          PhoneCell: 4342342123,
          PhoneWork: 4506826254,
          SalesRep: "Jeff",
          Status: "Lost",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 34568",
          City: "Atlanta",
          State: "GA"
        },
        {
          id: 2,
          Name: "Billy John",
          PhoneHome: 4503333332,
          PhoneCell: 4567444443,
          PhoneWork: 4508962454,
          SalesRep: "Jeff",
          Status: "FollowUp",
          LastPurchase: "Honda CR-V",
          LastContacted: new Date(),
          Source: "DMS Sales",
          StreetAddress: "5603 Summer Hill Drive 45678",
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
          StreetAddress: "5603 Summer Hill Drive 34568",
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
