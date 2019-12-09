import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Successfull extends Component {
  render() {
    return (
      <View style={}>
        <Text> İletişim Talebiniz iletilmiştir. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
