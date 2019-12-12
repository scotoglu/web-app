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
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//Components
import Headerbar from "../components/HeaderBar";
import Map from "../components/Map";
import Category from "../components/Category";
const { height, width } = Dimensions.get("window");
export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView scrollEventThrottle={16}>
          <Headerbar />
          {/**Changing background color will change entire page color */}
          <View style={{ flex: 1, backgroundColor: "white", marginTop: 10 }}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 20,
                fontWeight: "700",
                paddingHorizontal: 20
              }}
            >
              Sinem Kobaner Fotoğraf İşleri
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => navigate("Örnekler", { name: "Örnekler" })}
                >
                  <Category
                    name="Dış Çekim"
                    imageUrl={require("../../../assets/home.jpg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate("Örnekler", { name: "Örnekler" })}
                >
                  <Category
                    name="Özel Günler"
                    imageUrl={require("../../../assets/experiences.jpg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate("Örnekler", { name: "Örnekler" })}
                >
                  <Category
                    name="Doğum"
                    imageUrl={require("../../../assets/restaurant.jpg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate("Örnekler", { name: "Örnekler" })}
                >
                  <Category
                    name="Düğün-Nişan"
                    imageUrl={require("../../../assets/restaurant.jpg")}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Introducing Photographer Plus
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                A new selection of homes verified for quality & comfort
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dddddd"
                  }}
                  source={require("../../../assets/home.jpg")}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => navigate("Hesabım", { name: "Hesabım" })}
              >
                <Text
                  style={{
                    fontWeight: "100",
                    fontSize: 20,
                    borderWidth: 2,
                    borderColor: "#ecf0f1",
                    paddingHorizontal: 15,
                    borderRadius: 5
                  }}
                >
                  Giriş
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => navigate("Randevu", { name: "Randevu" })}
              >
                <Text
                  style={{
                    fontWeight: "100",
                    fontSize: 20,
                    borderWidth: 2,
                    borderColor: "#ecf0f1",
                    paddingHorizontal: 15,
                    borderRadius: 5
                  }}
                >
                  Randevu
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}
              >
                İletişim
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#ecf0f1",
                marginHorizontal: 25
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="map-marker" size={25}></Icon>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: "100",
                    fontSize: 15,
                    fontStyle: "italic  "
                  }}
                >
                  Güzelyalı, 25-1, Uğur Mumcu Blv., 01170 Çukurova/Adana
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Icon name="phone" size={25}></Icon>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: "100",
                    fontSize: 15,
                    fontStyle: "italic"
                  }}
                >
                  05065151290
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 3 }}>
                <Icon name="instagram" size={25}></Icon>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: "100",
                    fontSize: 15,
                    fontStyle: "italic"
                  }}
                >
                  @dlsinemkobaner
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 2,
                borderColor: "#ecf0f1",
                marginTop: 10,
                marginLeft: 25,
                marginRight: 25,
                marginBottom: 30
              }}
            >
              <Map />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
