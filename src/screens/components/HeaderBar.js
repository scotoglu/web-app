import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Header, Icon } from "react-native-elements";

class CustomHeader extends Component {
  render() {
    return (
      <Image
        source={require("../../../assets/logov3.jpg")}
        style={{ width: 70, height: 50, borderRadius: 5, marginVertical: 2 }}
      ></Image>
    );
  }
}

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header
        containerStyle={{
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "#ecf0f1"
        }}
        centerComponent={<CustomHeader />}
      />
    );
  }
}

const styles = StyleSheet.create({});
/*{
          text: "Sinem Kobaner",
          style: {
            fontFamily: "sans-serif",
            color: "#fff",
            fontStyle: "italic",
            fontSize: 20,
            fontWeight: "300"
          }
        } */
