import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Login from "../login/Login";
import Profile from "./Profile";

export default class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
      forgottenPassword: false
    };
    this.updateSigned = this.updateSigned.bind(this);
  }
  updateSigned = text => {
    this.setState({
      isSignIn: text
    });
  };
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {this.state.isSignIn ? (
          <View>
            <Profile />
          </View>
        ) : (
          <Login updateSigned={this.updateSigned} />
        )}
      </View>
    );
  }
}
