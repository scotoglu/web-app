import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Button,
  Text,
  TouchableOpacity,
  StatusBar,
  BackHandler
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//Components
import Headerbar from "../components/HeaderBar";
import Map from "../components/Map";
import Category from "../components/Category";
import { Actions } from "react-native-router-flux";
const { height, width } = Dimensions.get("window");
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.backButtonPress = this.backButtonPress.bind(this);
  }

  backButtonPress = () => {
    console.log("BackButton pressed...");
    BackHandler.exitApp();
    return true;
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView scrollEventThrottle={16}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Headerbar />

          <View style={styles.topContainer}>
            <Text style={styles.topTextContent}>
              Sinem Kobaner Fotoğraf İşleri
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => Actions.works({ text: "Dış Çekim" })}
                >
                  <Category
                    name="Dış Çekim"
                    imageUrl={require("../../../assets/home.jpg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Actions.works({ text: "Özel Günler" })}
                >
                  <Category
                    name="Özel Günler"
                    imageUrl={require("../../../assets/experiences.jpg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Actions.works({ text: "Doğum" })}
                >
                  <Category
                    name="Doğum"
                    imageUrl={require("../../../assets/restaurant.jpg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Actions.works({ text: "Düğün-Nişan" })}
                >
                  <Category
                    name="Düğün-Nişan"
                    imageUrl={require("../../../assets/restaurant.jpg")}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={styles.mainPhotoContainer}>
              <Text style={styles.mainPhotoContainerText}>
                Introducing Photographer Plus
              </Text>
              <Text style={styles.mainPhotoContainerSmallText}>
                A new selection of homes verified for quality & comfort
              </Text>
              <View style={styles.mainPhotoView}>
                <Image
                  style={styles.mainImage}
                  source={require("../../../assets/home.jpg")}
                />
              </View>
            </View>
            <View style={styles.ButtonsView}>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => Actions.login()}
                // onPress={() => navigate("Hesabım", { name: "Hesabım" })}
              >
                <Text style={styles.enterButtonText}>Giriş</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: 10 }}
                //onPress={() => navigate("Randevu", { name: "Randevu" })}
                onPress={() => Actions.appointment()}
              >
                <Text style={styles.appointmentButtonText}>Randevu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactView}>
              <Text style={styles.contactText}>İletişim</Text>
            </View>
            <View style={styles.contactContentView}>
              <View style={{ flexDirection: "row" }}>
                <Icon name="map-marker" size={25}></Icon>
                <Text style={styles.contactContentAdressText}>
                  Güzelyalı, 25-1, Uğur Mumcu Blv., 01170 Çukurova/Adana
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Icon name="phone" size={25}></Icon>
                <Text style={styles.contactContentPhoneText}>
                  +905065151290
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Icon name="instagram" size={25}></Icon>
                <Text style={styles.contactContentInstagramText}>
                  @dlsinemkobaner
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Icon name="globe" size={25}></Icon>
                <Text style={styles.contactContentWebsiteText}>
                  www.sinemkobaner.com
                </Text>
              </View>
            </View>
            <View style={styles.contactContentMap}>
              <Map />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  topTextContent: {
    /**Sinem Kobaner Fotoğraf İşleri */
    marginTop: 15,
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  scrollContainer: {},
  mainPhotoContainer: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  mainPhotoContainerText: {
    fontSize: 20,
    fontWeight: "700"
  },
  mainPhotoContainerSmallText: {
    fontWeight: "100",
    marginTop: 10
  },
  mainPhotoView: {
    width: width - 40,
    height: 200,
    marginTop: 20
  },
  mainImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#dddddd"
  },
  ButtonsView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  enterButtonText: {
    fontWeight: "100",
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#ecf0f1",
    paddingHorizontal: 35,
    borderRadius: 5
  },
  appointmentButtonText: {
    fontWeight: "100",
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#ecf0f1",
    paddingHorizontal: 15,
    borderRadius: 5
  },
  contactView: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  contactText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center"
  },
  contactContentView: {
    flexDirection: "column",
    marginTop: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ecf0f1",
    marginHorizontal: 25
  },
  contactContentAdressText: {
    marginLeft: 5,
    fontWeight: "100",
    fontSize: 15,
    fontStyle: "italic"
  },
  contactContentPhoneText: {
    marginLeft: 5,
    fontWeight: "100",
    fontSize: 15,
    fontStyle: "italic"
  },
  contactContentInstagramText: {
    marginLeft: 5,
    fontWeight: "100",
    fontSize: 15,
    fontStyle: "italic"
  },
  contactContentWebsiteText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "100",
    fontStyle: "italic"
  },
  contactContentMap: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#ecf0f1",
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 30
  }
});
