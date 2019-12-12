import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Picker,
  Alert
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderBar from "../components/HeaderBar";
import DateAppo from "../components/Date";

export default class Appointment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      mail: "",
      message: "",
      date: "",
      photoType: "Çekim Türü"
    };
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handlePhotoType = this.handlePhotoType.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  handleName = text => {
    this.setState({ name: text });
    console.log(text);
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

  handleDate = text => {
    this.setState({ date: text });
  };

  handlePhotoType = text => {
    if (text != "Çekim Türü") {
      console.log(text);

      this.setState({
        photoType: text
      });
    }
  };
  onButtonPress = () => {
    console.log(this.state.name);
    Alert.alert(
      "Randevu Talebi",
      "Talebiniz başarıyla iletilmiştir. En kısa sürede tarafınıza dönüş yapılacaktır",
      [{ text: "Tamam" }]
    );
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View>
          <HeaderBar />
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 10,
              alignItems: "center"
            }}
          >
            <Text h3 style={styles.title}>
              Randevu Talebi
            </Text>
            <Input
              onChangeText={this.handleName}
              autoCorrect={true}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Adınız ve Soyadınız"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              onChangeText={this.handlePhone}
              keyboardType="numeric"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Telefon"
              leftIcon={<Icon name="phone" size={24} color="black" />}
            />
            <Input
              onChangeText={this.mail}
              keyboardType="email-address"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Mail"
              leftIcon={<Icon name="at" size={24} color="black" />}
            />
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
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderColor: "#bdc3c7"
              }}
            >
              <Icon
                name="chevron-down"
                size={24}
                style={{ marginRight: "13%", marginTop: 5 }}
              ></Icon>
              <Picker
                selectedValue={this.state.photoType}
                onValueChange={this.handlePhotoType}
                style={{
                  width: "60%",
                  height: 40,
                  borderBottomWidth: 2,
                  marginBottom: 2
                }}
              >
                <Picker.Item
                  label="Çekim Türü"
                  value="Çekim Türü"
                ></Picker.Item>
                <Picker.Item label="Dış Çekim" value="Dış Çekim"></Picker.Item>
                <Picker.Item label="Doğum" value="Doğum"></Picker.Item>
                <Picker.Item label="Nişan" value="Nişan"></Picker.Item>
              </Picker>
            </View>
            <DateAppo />
            <Button
              buttonStyle={styles.buttonStyle}
              title="Randevu Al"
              onPress={() => this.onButtonPress()}
            ></Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  inputContainerStyle: {
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#bdc3c7",
    borderBottomWidth: 2
  },
  inputStyle: {
    marginLeft: 5
  },
  buttonStyle: {
    marginTop: 20
  },
  title: {
    marginBottom: 5,
    marginTop: 5
  }
});
