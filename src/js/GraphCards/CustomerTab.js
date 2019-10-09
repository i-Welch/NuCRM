import React, { Component } from "react";
import TabContent from "./TabContent";
import * as firebase from "firebase";
import "../../css/CustomerTab.css";
import SaveBut from "../Buttons/SaveButton";
import { TextField } from "@material-ui/core";

class CustomerTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      viewing: null,
      data: [
      ],
      newUser: {}
    };

    firebase.firestore().collection("Customer").get().then(snapshot => {
      const users = snapshot.docs.map(doc => {
        return doc.data();
      });
      this.setState({data: users});
    });
  }
  render() {
    const isEditing = this.state.isEditing;
    return (
      <div className="content">
      {
        !isEditing ?
        (
          <TabContent data={this.state.data} addNewCustomer={this.addNewCustomer}/>
        ) :
        (
          <div className="customerForm">
            <div className="customerPrimaryFields">
              <TextField
                name="First Name"
                onChange={(event) => this.handleChange("firstName", event)}
              />
            </div>
            <div className="customerSecondaryFields">
              <SaveBut handleClick={this.onSave}/>
            </div>
          </div>
        )
      }
      </div>
    );
  }

  addNewCustomer = () => {
    this.setState({isEditing: true});
  }

  onSave = async () => {
    await firebase.firestore().collection("Customer").add(this.state.newUser);
    await this.updateStateWithCustomers();
    this.setState({
      newUser: {},
      isEditing: false
    });
  }

  handleChange = (path, event) => {
    const updatedState = {newUser: {}};
    updatedState["newUser"][path] = event.target.value;
    this.setState(updatedState);
  }

  updateStateWithCustomers = async () => {
    const snapshot = await firebase.firestore().collection("Customer").get()
    const users = snapshot.docs.map(doc => {
      return doc.data();
    });
    this.setState({data: users});
  }
}

export default CustomerTab;
