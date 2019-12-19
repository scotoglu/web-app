import React, { Component } from "react";
import { YellowBox } from "react-native";

/*Ekranda çıkan uyarıları gizler.Kod uyarıları!!! */
/*--------------------------------- */
YellowBox.ignoreWarnings(["Warning: ..."]);
console.disableYellowBox = true;
/*--------------------------------- */

import { Router, Scene, Tabs, Actions, Stack } from "react-native-router-flux";

//Components
import Login from "./src/screens/login/Login";
import Home from "./src/screens/home/Home";
import ContactRequest from "./src/screens/contactRequest/ContactRequest";
import Appointment from "./src/screens/appointment/Appointment";
import Works from "./src/screens/works/Works";
import Profile from "./src/screens/accounts/Profile";
import ForgottenPassword from "./src/screens/login/ForgottenPassword";
//
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends Component {
  render() {
    const scenes = Actions.create(
      <Stack key="root" hideNavBar>
        <Tabs showLabel={true} swipeEnabled={true}>
          <Scene
            hideNavBar
            key="home"
            component={Home}
            tabBarLabel="Anasayfa"
            icon={({ tintColor }) => (
              <Icon name="home" color={tintColor} size={24} />
            )}
          />

          <Scene
            hideNavBar
            key="contact"
            component={ContactRequest}
            tabBarLabel="İletişim"
            icon={({ tintColor }) => (
              <Icon name="calendar" color={tintColor} size={24} />
            )}
          />
          <Scene
            hideNavBar
            key="appointment"
            component={Appointment}
            tabBarLabel="Randevu"
            icon={({ tintColor }) => (
              <Icon name="phone-square" color={tintColor} size={24} />
            )}
          />
          <Scene
            initial
            hideNavBar
            key="login"
            component={Profile}
            tabBarLabel="Hesabım"
            icon={({ tintColor }) => (
              <Icon name="user" color={tintColor} size={24} />
            )}
          />
        </Tabs>
        <Scene type="replace" key="profile" tabs={true} component={Profile} />
        <Scene key="login" component={Login} />
        <Scene key="appointment" component={Appointment} />
        <Scene key="works" component={Works} />
        <Scene key="forgottenPassword" component={ForgottenPassword} />
        {/* <Scene key="forgottenPassword" component={ForgottenPassword}/>
        <Scene key="resetPassword" component={ResetPassword}/> */}
      </Stack>
    );
    return <Router scenes={scenes}></Router>;
  }
}
