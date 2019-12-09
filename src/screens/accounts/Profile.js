import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "Sefa ÇOTOĞLU",
        stateOfPhoto: 2
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={styles.name}>{this.state.user.name}</Text>
        </View>
        <View style={styles.ınformation}>
          <Text>Fotoğraflarınız hazır olduğunda görüntülenecektir.</Text>
        </View>
      </View>
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
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 100,
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "700"
  }
});
