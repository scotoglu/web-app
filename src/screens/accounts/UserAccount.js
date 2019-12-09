import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import Profile from "./Profile";

export default class UserAccount extends Component {
  constructor() {
    super();
    this.state = {
      isSignIn: true
    };
  }
  render() {
    return (
      <View>
        <HeaderBar />
        {this.state.isSignIn ? <Profile /> : <Text>Giriş Yapılmamış</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
