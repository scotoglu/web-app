import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Alert,
  Dimensions
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderBar from "../components/HeaderBar";

export default class ContactRequest extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      mail: "",
      message: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  handleName = text => {
    this.setState({ name: text });
  };
  handlePhone = text => {
    this.setState({ phone: text });
  };

  handleMail = text => {
    this.setState({ mail: text });
  };
  handleMessage = text => {
    this.setState({ message: text });
  };
  onButtonPress = () => {
    if (
      this.state.name != "" &&
      this.state.phone != "" &&
      this.state.mail != "" &&
      this.state.message != ""
    ) {
      Alert.alert(
        "Randevu Talebi",
        "Talebiniz başarıyla iletilmiştir. En kısa sürede tarafınıza dönüş yapılacaktır",
        [{ text: "Tamam" }]
      );
      this.setState({ name: "", phone: "", mail: "", message: "" });
    } else {
      Alert.alert("Randevu Talebi", "Tüm alanlar eksiksiz doldurulmalıdır.", [
        { text: "Tamam" }
      ]);
    }
  };
  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{ backgroundColor: "white", height: height, width: width }}
      >
        <View>
          <HeaderBar />
          <View style={styles.container}>
            <Text h3 style={styles.title}>
              İletişim Talebi
            </Text>
            <Input
              value={this.state.name}
              onChangeText={this.handleName}
              autoCorrect={true}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Adınız ve Soyadınız"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              value={this.state.phone}
              onChangeText={this.handlePhone}
              keyboardType="numeric"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Telefon"
              leftIcon={<Icon name="phone" size={24} color="black" />}
            />
            <Input
              value={this.state.mail}
              onChangeText={this.handleMail}
              keyboardType="email-address"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Mail"
              leftIcon={<Icon name="at" size={24} color="black" />}
            />
            {/* Sorun var. Text yukarıya doğru kayıyor. Textarea olmalı*/}
            <Input
              blurOnSubmit={true}
              value={this.state.message}
              onChangeText={this.handleMessage}
              autoCorrect={true}
              multiline={true}
              numberOfLines={3}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Mesajınız"
              leftIcon={<Icon name="envelope" size={24} color="black" />}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              title="Gönder"
              onPress={() => this.onButtonPress()}
            ></Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginTop: 10, alignItems: "center" },
  inputContainerStyle: { marginBottom: 5, marginLeft: 10, marginRight: 10 },
  inputStyle: {
    marginLeft: 5
  },
  buttonStyle: {
    width: 100,
    marginTop: 20
  },
  title: {
    marginBottom: 5,
    marginTop: 5,
    textAlign: "center"
  }
});
