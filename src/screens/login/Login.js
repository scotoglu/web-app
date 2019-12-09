import React, { Component } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { Input } from "react-native-elements";
export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Input: {
    height: 50,
    paddingHorizontal: 20
  }
});
