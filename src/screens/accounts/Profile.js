import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import HeaderBar from "../components/HeaderBar";
import Login from "../login/Login";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isLoginSuccess: false,
      user: {
        name: "Sefa ÇOTOĞLU",
        stateOfPhoto: 2
      }
    };
    this.loginSuccess = this.loginSuccess.bind(this);
  }
  loginSuccess = text => {
    this.setState({
      isLoginSuccess: text
    });
  };
  render() {
    const { height, width } = Dimensions.get("window");
    return this.state.isLoginSuccess ? (
      <View
        style={{
          height: height,
          width: width
        }}
      >
        <HeaderBar />
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={styles.name}>{this.state.user.name}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            height: "50%",
            alignItems: "center"
          }}
        >
          <Text style={styles.ınformation}>
            Fotoğraflarınız hazır olduğunda burada görüntülenecektir
          </Text>
        </View>
      </View>
    ) : (
      <Login loginSuccess={this.loginSuccess} />
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "500"
  },
  TextContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  ınformation: {
    textAlign: "center",

    justifyContent: "center",
    fontSize: 15,
    fontWeight: "100"
  }
});
