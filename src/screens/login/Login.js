import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  AsyncStorage
} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
//import AsyncStorage from "@react-native-community/async-storage";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: "",
      userPassword: ""
    };
    this.handleUserMail = this.handleUserMail.bind(this);
    this.handleUserPassword = this.handleUserPassword.bind(this);
    this.login = this.login.bind(this);
    this.userAlreadyLogin = this.userAlreadyLogin.bind(this);
  }
  componentDidMount() {
    this.userAlreadyLogin();
  }
  handleUserMail = text => {
    if (text != "") {
      this.setState({
        userMail: text
      });
    }
  };
  handleUserPassword = text => {
    if (text != "") {
      this.setState({
        userPassword: text
      });
    }
  };

  userAlreadyLogin = async () => {
    const logKey = await AsyncStorage.getItem("mail");
    try {
      if (logKey != null) {
        Actions.profile();
      }
      return null;
    } catch (error) {
      console.log("Login userAlreadyLogin control.  " + error);
    }
  };
  login = async () => {
    const logKey = await AsyncStorage.getItem("mail");
    try {
      if (this.state.userMail === logKey) {
        Actions.profile();
      } else {
        alert("Wrong user...");
        if (logKey === null) {
          await AsyncStorage.setItem("mail", this.state.userMail);
        }
      }

      return null;
    } catch (error) {
      console.log("Login userAlreadyLogin control.  " + error);
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.Container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/logov3.jpg")}
            style={styles.logo}
          ></Image>
        </View>
        <View style={styles.componentContainer}>
          <Input
            keyboardType="email-address"
            onChangeText={this.handleUserMail}
            inputStyle={{ marginLeft: 5, textAlign: "center" }}
            placeholder="Mail Adresiniz"
            leftIcon={<Icon name="user" size={24}></Icon>}
          ></Input>

          <Input
            secureTextEntry
            onChangeText={this.handleUserPassword}
            inputStyle={{ marginLeft: 5, textAlign: "center" }}
            placeholder="Şifreniz"
            leftIcon={<Icon name="lock" size={24}></Icon>}
          ></Input>
          <TouchableOpacity style={styles.loginButton} onPress={this.login}>
            <Text style={styles.loginButtonText}>Giriş</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgottenPassword}
            onPress={() => {
              Actions.forgottenPassword();
            }}
          >
            <Text>Şifremi Unuttum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgottenPassword}
            onPress={() => {
              Actions.home();
            }}
          >
            <Text>Anasayfa</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "40%"
  },
  logo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 150,
    height: 150
  },
  componentContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    height: "50%"
  },
  loginButton: {
    width: "90%",
    height: "10%",
    borderWidth: 2,
    borderColor: "#bdc3c7",
    borderRadius: 5,
    marginTop: 20
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "100"
  },
  forgottenPassword: {
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 20
  }
});
