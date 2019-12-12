import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Header } from "react-native-elements";
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
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5
          }}
        >
          <Image
            source={require("../../../assets/logov3.jpg")}
            style={{
              width: 70,
              height: 70,
              borderRadius: 5,
              marginVertical: 2
            }}
          ></Image>
        </View>
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
