import React, { Component } from "react";
import { Text, StyleSheet, View, Picker } from "react-native";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/FontAwesome";
export default class DateAppo extends Component {
  constructor() {
    super();
    this.state = { date: "", time: "", approvedTime: "Saatler" };
    this.handleTime = this.handleTime.bind(this);
  }
  handleTime = text => {
    if (text != "Saatler") {
      this.setState({
        approvedTime: text
      });
    }
  };
  render() {
    return (
      <View style={{ flexDirection: "column", marginTop: 5 }}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#bdc3c7"
          }}
        >
          <View style={{ marginTop: 10, marginRight: 30 }}>
            <Icon name="calendar" size={24}></Icon>
          </View>
          <DatePicker
            style={{ width: 100 }}
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
              this.setState({ date: date });
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#bdc3c7",
            marginTop: 10
          }}
        >
          <View style={{ marginRight: 40 }}>
            <Icon name="clock-o" size={24}></Icon>
          </View>
          <Picker
            style={{ width: 200, height: 20, marginLeft: 10 }}
            selectedValue={this.state.approvedTime}
            onValueChange={this.handleTime}
          >
            <Picker.Item label="Saatler" value="Saatler"></Picker.Item>
            <Picker.Item label="8.00-10.30" value="8.00-10.30"></Picker.Item>
            <Picker.Item label="10.45-13.00" value="10.45-13.00"></Picker.Item>
            <Picker.Item label="16.00-18.00" value="16.00-18.00"></Picker.Item>
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
