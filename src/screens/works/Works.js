import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Picker,
  PickerItem,
  Image
} from "react-native";
import HeaderBar from "../components/HeaderBar";
import Swiper from "react-native-swiper";
export default class Samples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "Örnek Seçiniz",
      images: [
        {
          Nisan: {
            //Fotograf
          },
          Dogum: {
            //Fotograf
          },
          DısCekim: {
            //Fotograf
          }
        }
      ]
    };
    this.handlePickerChoice = this.handlePickerChoice.bind(this);
  }
  componentDidMount() {}
  handlePickerChoice = text => {
    if (text != "Örnek Seçiniz") {
      this.setState({ selectedValue: text });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        <View style={styles.PickerContainer}>
          <Picker
            style={styles.Picker}
            selectedValue={this.state.selectedValue}
            onValueChange={this.handlePickerChoice}
          >
            <Picker.Item label="Örnek Seçiniz" value="Örnek Seçiniz" />
            <Picker.Item label="Doğum" value="Doğum" />
            <Picker.Item label="Nişan" value="Nişan" />
            <Picker.Item label="Dış Çekim" value="Dış Çekim" />
            <Picker.Item label="Özel Günler" value="Özel Günler" />
          </Picker>
        </View>
        <View style={styles.SliderContainer}>
          <Swiper showsButtons={true} autoplay={true} style={styles.wrapper}>
            {/*this.state.images.map()... buraya bastırılacak. 
            <View>
                <Image></Image>
            </View
              */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: "60%", width: "50%" }}
                source={require("../../../assets/logov3.jpg")}
              ></Image>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: "60%", width: "50%" }}
                source={require("../../../assets/logov3.jpg")}
              ></Image>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: "60%", width: "50%" }}
                source={require("../../../assets/logov3.jpg")}
              ></Image>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: "60%", width: "50%" }}
                source={require("../../../assets/logov3.jpg")}
              ></Image>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: "60%", width: "50%" }}
                source={require("../../../assets/logov3.jpg")}
              ></Image>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    flexDirection: "column"
  },
  PickerContainer: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    height: "10%",
    flexDirection: "row",
    backgroundColor: "#ecf0f1"
  },
  SliderContainer: {
    flexDirection: "row",
    height: "60%",
    backgroundColor: "white"
  },
  Picker: {
    width: "40%",
    height: 30
  }
});
