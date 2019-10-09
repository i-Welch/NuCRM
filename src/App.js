import React, { Component } from "react";
import "./css/App.css";
import TabHeader from "./js/TabHeader.js";
import TabPage from "./js/TabPage";
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
    firebase.initializeApp({
      apiKey: "AIzaSyDKKM2nu4tHgkLYpLVYfK_6gzhPYv_zJT0",
      authDomain: "nucrm-api.firebaseapp.com",
      databaseURL: "https://nucrm-api.firebaseio.com",
      projectId: "nucrm-api",
      storageBucket: "nucrm-api.appspot.com",
      messagingSenderId: "34597706173",
      appId: "1:34597706173:web:3605be1067450e5f515ad4",
      measurementId: "G-C64XCC8L9J"
    });
    firebase.auth().signInWithEmailAndPassword("welchcisaac@gmail.com", "password")
      .then((user) => {
        firebase.firestore().collection("Customer").get()
          .then(snapshot => {
            snapshot.docs.map(doc => {
              console.log(doc.data())
            })
          })
      });
  }

  render() {
    return (
      <div className="App">
        <TabHeader
          activeTab={this.state.activeTab}
          changeTab={x => this.setState({ activeTab: x })}
        />
        <TabPage className="content" activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default App;
