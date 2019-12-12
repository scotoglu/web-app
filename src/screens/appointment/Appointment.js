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
import DatePicker from "react-native-datepicker";
export default class Appointment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      mail: "",
      message: "",
      date: "",
      time: "Saatler",
      photoType: "Çekim Türü"
    };
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handlePhotoType = this.handlePhotoType.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.handleTime = this.handleTime.bind(this);
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

  handleDate = text => {
    this.setState({ date: text });
  };

  handleTime = text => {
    if (text != "Saatler") {
      this.setState({
        time: text
      });
    }
  };
  handlePhotoType = text => {
    if (text != "Çekim Türü") {
      this.setState({
        photoType: text
      });
    }
  };
  onButtonPress = () => {
    if (
      this.state.name != "" &&
      this.state.phone != "" &&
      this.state.photoType != "Çekim Türü" &&
      this.state.date != "" &&
      this.state.time != "Saatler" &&
      this.state.mail != "" &&
      this.state.message != ""
    ) {
      Alert.alert(
        "Randevu Talebi",
        "Talebiniz başarıyla iletilmiştir. En kısa sürede tarafınıza dönüş yapılacaktır",
        [{ text: "Tamam" }]
      );
      this.setState({
        name: "",
        phone: "",
        mail: "",
        message: "",
        date: "",
        time: "Saatler",
        photoType: "Çekim Türü"
      });
    } else {
      Alert.alert("Randevu Talebi", "Tüm alanlar eksiksiz doldurulmalıdır.", [
        { text: "Tamam" }
      ]);
    }
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
              onChangeText={this.handleMail}
              keyboardType="email-address"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Mail"
              leftIcon={<Icon name="at" size={24} color="black" />}
            />
            {/*Textarea */}
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
            {/**Dropdown  */}
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

            {/**DatePicker */}
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderColor: "#bdc3c7",
                width: "80%"
              }}
            >
              <View style={{ marginTop: 10, marginRight: 30 }}>
                <Icon name="calendar" size={24}></Icon>
              </View>
              <DatePicker
                style={{ width: "40%" }}
                date={this.state.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="Tarih"
                format="DD.MM.YYYY"
                confirmBtnText="Onayla"
                cancelBtnText="İptal"
                customStyles={{
                  placeholderText: {
                    textAlign: "center",
                    fontSize: 16,
                    color: "black",
                    fontWeight: "200"
                  },
                  dateIcon: {
                    // position: "absolute",
                    // left: 0,
                    // top: 4,
                    // marginLeft: 0
                    width: 0,
                    height: 0
                  },
                  dateInput: {
                    borderWidth: 0
                  },
                  dateText: {
                    fontWeight: "200"
                  }
                }}
                onDateChange={date => {
                  this.handleDate(date);
                }}
              />
            </View>

            {/**Available times */}
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderColor: "#bdc3c7",
                marginTop: 10,
                width: "80%"
              }}
            >
              <View style={{ marginRight: 40 }}>
                <Icon name="clock-o" size={24}></Icon>
              </View>
              <Picker
                style={{ width: 200, height: 20, marginLeft: 10 }}
                selectedValue={this.state.time}
                onValueChange={this.handleTime}
              >
                <Picker.Item label="Saatler" value="Saatler"></Picker.Item>
                {/*Saatler API'den gelicek */}
                <Picker.Item
                  label="8.00-10.30"
                  value="8.00-10.30"
                ></Picker.Item>
                <Picker.Item
                  label="10.45-13.00"
                  value="10.45-13.00"
                ></Picker.Item>
                <Picker.Item
                  label="16.00-18.00"
                  value="16.00-18.00"
                ></Picker.Item>
              </Picker>
            </View>
            {/*Button */}
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
