import React, { Component } from "react";
import LeadsSheet from "./GraphCards/LeadsSheet";

class LeadsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
      data: [
        {
          id: 0,
          Customer: "Joe Bob",
          LastContact: new Date(),
          Status: "Approved",
          Source: "Car Guru"
        },
        {
          id: 1,
          Customer: "Joe Bob",
          LastContact: new Date(),
          Status: "Approved",
          Source: "Car Guru"
        },
        {
          id: 2,
          Customer: "Joe Bob",
          LastContact: new Date(),
          Status: "Approved",
          Source: "Car Guru"
        },
        {
          id: 3,
          Customer: "Joe Bob",
          LastContact: new Date(),
          Status: "Approved",
          Source: "Car Guru"
        },
        {
          id: 4,
          Customer: "Joe Bob",
          LastContact: new Date(),
          Status: "Approved",
          Source: "Car Guru"
        }
      ]
    };
  }
  handleSave(obj) {
    let temp = this.state.data.slice(0);
    temp[this.state.editing] = obj;
    this.setState({ data: temp, editing: null });
  }
  handleAdd(obj) {
    if (!(this.state.data.findIndex(entry => entry.id === obj.id) !== -1)) {
      let temp = this.state.data.slice(0);
      temp.push(obj);
      this.setState({ data: temp, editing: null });
    } else {
      alert("No Duplicate Entries");
    }
  }
  render() {
    return (
      <div>
        <LeadsSheet
          rows={this.state.data}
          editing={this.state.editing}
          handleSave={obj => this.handleSave(obj)}
          handleEdit={num => this.setState({ editing: num })}
          handleDel={num =>
            this.setState({
              data: this.state.data.filter(obj => obj.id !== num)
            })
          }
          handleAdd={obj => this.handleAdd(obj)}
        />
      </div>
    );
  }
}

export default LeadsTab;
