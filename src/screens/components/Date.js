import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/FontAwesome";
export default class DateAppo extends Component {
  constructor() {
    super();
    this.state = { date: "" };
  }

  render() {
    return (
      <View>
        <DatePicker
          style={{ width: 255 }}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Tarih Seçin"
          format="DD.MM.YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
