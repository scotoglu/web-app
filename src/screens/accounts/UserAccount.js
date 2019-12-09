import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from "react-native";
import { Input } from "react-native-elements";
import Profile from "./Profile";
import Icon from "react-native-vector-icons/FontAwesome";
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../../assets/logov3.jpg")}
            style={styles.Image}
          ></Image>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Input
            keyboardType="email-address"
            inputStyle={{ marginLeft: 5 }}
            placeholder="Mail Adresiniz"
            leftIcon={<Icon name="user" size={24} color="black" />}
          ></Input>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Input
            secureTextEntry
            inputStyle={{ marginLeft: 5 }}
            placeholder="Şifreniz"
            leftIcon={<Icon name="unlock-alt" size={24} color="black" />}
          ></Input>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              width: "80%",
              marginTop: 20,
              borderWidth: 2,
              borderColor: "#95a5a6"
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20 }}
              onPress={() => this.props.updateSigned(true)}
            >
              Giriş
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, borderBottomWidth: 1 }}>
            <Text
              style={{
                textAlign: "right",
                fontSize: 12,
                fontWeight: "50"
              }}
            >
              Şifremi Unuttum
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* {this.state.isSignIn ? <HeaderBar /> : null} */}
        {this.state.isSignIn ? (
          <Profile />
        ) : (
          <Login updateSigned={this.updateSigned} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logTextInputs: {},
  Image: {
    width: "50%",
    height: "50%",
    marginBottom: 20
  }
});
