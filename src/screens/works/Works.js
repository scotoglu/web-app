import React, { Component } from "react";
import { StyleSheet, View, Picker, Image, Text } from "react-native";
import HeaderBar from "../components/HeaderBar";
import Swiper from "react-native-swiper";
export default class Samples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "Örnek Seçiniz",
      samples: [],
      sampleType: ""
    };
    this.handlePickerChoice = this.handlePickerChoice.bind(this);
    this.createDatas = this.createDatas.bind(this);
    this.whichImagesSample = this.whichImagesSample.bind(this);
  }
  componentDidMount() {
    this.setState({
      sampleType: this.props.text
    });
    this.whichImagesSample();
    this.createDatas();
  }
  handlePickerChoice = text => {
    if (text != "Örnek Seçiniz") {
      this.setState({ selectedValue: text });
    }
  };

  createDatas = () => {
    tempData = [];
    for (let index = 0; index < 20; index++) {
      tempData.push({
        id: index,
        value: require("../../../assets/1.jpg")
      });
    }

    this.setState({
      samples: tempData
    });
  };

  whichImagesSample = () => {
    switch (this.state.sampleType) {
      case "Özel Günler":
        /**
         * api request
         *
         * this.setState({samples:response})
         */
        break;
      case "Doğum":
        /**
         * api request
         * this.setState({samples:response})
         *  */

        break;

      case "Düğün":
        /**
         * api request
         *
         * this.setState({samples:response})
         */
        break;

      case "Nişan":
        /**
         *
         * api request
         *
         * this.setState({samples:response})
         */
        break;

      default:
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        {/* <View style={styles.PickerContainer}>
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
        </View> */}

        <View style={styles.topTextView}>
          <Text style={styles.topText}>
            {this.props.text} Örneklerini Görüntülemektesiniz.
          </Text>
        </View>
        <View style={styles.SwiperContainer}>
          <Swiper showsButtons={true} autoplay={true} style={styles.wrapper}>
            {/*this.state.images.map()... buraya bastırılacak. 
            <View>
                <Image></Image>
            </View
              */}
            {this.state.samples.map(url => (
              <View key={parseInt(url.id)} style={styles.swiperImagesView}>
                <Image style={styles.swiperImages} source={url.value} />
              </View>
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  // PickerContainer: {
  //   textAlign: "center",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   borderColor: "black",
  //   borderWidth: 2,
  //   height: "10%",
  //   flexDirection: "row",
  //   backgroundColor: "#ecf0f1"
  // },
  SwiperContainer: {
    flexDirection: "row",
    height: "77%",
    backgroundColor: "white"
  },
  // Picker: {
  //   width: "40%",
  //   height: 30
  // },
  swiperImagesView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  swiperImages: {
    height: "100%",
    width: "100%"
  },
  topTextView: {
    padding: 5
  },
  topText: {
    padding: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "300"
  }
});
