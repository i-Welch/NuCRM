import React, { Component } from "react";
import "../css/dashtab.css";
import "./GraphCards/EmpActivityCard.js";
import EmpActivity from "./GraphCards/EmpActivityCard.js";
import NewLeads from "./GraphCards/NewLeadCard";

const data = [
  {
    key: 6245,
    name: "Jeff",
    Ups: 5,
    Calls: 2,
    Emails: 10,
    Texts: 4,
    Tasks: 12,
    ODueTasks: 3,
    Sold: 1,
    LoginTime: "4:50pm"
  },
  {
    key: 1298,
    name: "Jeff",
    Ups: 5,
    Calls: 2,
    Emails: 10,
    Texts: 4,
    Tasks: 12,
    ODueTasks: 3,
    Sold: 1,
    LoginTime: "4:50pm"
  },
  {
    key: 1234,
    name: "Jeff",
    Ups: 5,
    Calls: 2,
    Emails: 10,
    Texts: 4,
    Tasks: 12,
    ODueTasks: 3,
    Sold: 1,
    LoginTime: "4:50pm"
  },
  {
    key: 3456,
    name: "Jeff",
    Ups: 5,
    Calls: 2,
    Emails: 10,
    Texts: 4,
    Tasks: 12,
    ODueTasks: 3,
    Sold: 1,
    LoginTime: "4:50pm"
  }
];

const data2 = [
  {
    key: 4821,
    Time: "5:20",
    Event: "Email",
    Customer: "Billy Joe",
    Rep: "Jeff Morison",
    Source: "Website"
  },
  {
    key: 4822,
    Time: "5:20",
    Event: "Email",
    Customer: "Billy Joe",
    Rep: "Jeff Morison",
    Source: "Website"
  },
  {
    key: 4823,
    Time: "5:20",
    Event: "Email",
    Customer: "Billy Joe",
    Rep: "Jeff Morison",
    Source: "Website"
  },
  {
    key: 4824,
    Time: "5:20",
    Event: "Email",
    Customer: "Billy Joe",
    Rep: "Jeff Morison",
    Source: "Website"
  }
];

class DashTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashtab">
        <div>
          <EmpActivity rows={data} />
        </div>
        <div>
          <NewLeads rows={data2} />
        </div>
      </div>
    );
  }
}

export default DashTab;
