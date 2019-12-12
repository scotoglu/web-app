import React from "react";
import { StyleSheet, YellowBox } from "react-native";

/*Ekranda çıkan uyarıları gizler.Kod uyarıları!!! */
/*--------------------------------- */
YellowBox.ignoreWarnings(["Warning: ..."]);
console.disableYellowBox = true;
/*--------------------------------- */

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

//screens
import Home from "./src/screens/home/Home";
import ContactRequest from "./src/screens/contactRequest/ContactRequest";
import Appointment from "./src/screens/appointment/Appointment";
import Samples from "./src/screens/works/Works";
import UserAccount from "./src/screens/accounts/UserAccount";
const AppContainer = createBottomTabNavigator(
  {
    Anasayfa: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Anasayfa",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24}></Icon>
        )
      }
    },

    Randevu: {
      screen: Appointment,
      navigationOptions: {
        tabBarLabel: "Randevu",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar" color={tintColor} size={24}></Icon>
        )
      }
    },
    İletişim: {
      screen: ContactRequest,
      navigationOptions: {
        tabBarLabel: "İletişim",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="phone-square" color={tintColor} size={24}></Icon>
        )
      }
    },

    Hesabım: {
      screen: UserAccount,
      navigationOptions: {
        tabBarLabel: "Hesabım",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24}></Icon>
        )
      }
    },
    Örnekler: {
      screen: Samples,
      navigationOptions: {
        tabBarLabel: "Örnekler"
      }
    }
  },
  { initialRouteName: "Hesabım" }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});
export default createAppContainer(AppContainer);
