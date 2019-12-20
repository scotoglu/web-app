import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Image
} from "react-native";
import Modal from "react-native-modal";
import HeaderBar from "../components/HeaderBar";
import Swiper from "react-native-swiper";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Sefa ÇOTOĞLU",
        stateOfPhoto: 2
      },
      images: [],
      modalVisible: false,
      modalImageId: ""
    };

    this.createDatas = this.createDatas.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages = () => {
    //request to Api for images
  };

  componentDidMount() {
    this.createDatas();
  }
  createDatas = () => {
    tempData = [];
    for (let index = 0; index < 20; index++) {
      tempData.push({
        id: index,
        value: require("../../../assets/restaurant.jpg")
      });
    }

    this.setState({
      images: tempData
    });
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  itemClicked = (visible, imageİd) => {
    this.setState({ modalVisible: visible });
    this.setState({
      modalImageId: imageİd
    });
    console.log(imageİd);
    let width = Dimensions.get("screen").width;
    console.log(width);
  };

  render() {
    return (
      <>
        <HeaderBar />
        <View>
          <Text style={styles.UserInfo}>Sayın, {this.state.user.name}</Text>
        </View>
        <View style={styles.ImageDisplayContainer}>
          {/**Modal */}
          <Modal
            coverScreen={true}
            isVisible={this.state.modalVisible}
            onBackButtonPress={() => this.setModalVisible(false)}
          >
            <View style={styles.swipeContainer}>
              <Swiper
                showsButtons={false}
                autoplay={false}
                index={this.state.modalImageId}
              >
                {this.state.images.map(url => (
                  <View
                    key={url.id}
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      resizeMode="stretch"
                      resizeMethod="scale"
                      style={{ height: "100%", width: "100%" }}
                      source={url.value}
                    ></Image>
                  </View>
                ))}
              </Swiper>
            </View>
          </Modal>

          {/**FlatList */}
          {this.state.images.length <= 0 ? (
            <Text>Yükleniyor...</Text>
          ) : (
            <FlatList
              data={this.state.images}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => console.log(this.itemClicked(true, item.id))}
                >
                  <View style={styles.item}>
                    <Image
                      resizeMethod="scale"
                      style={{
                        height: Dimensions.get("window").width / 2,
                        width: Dimensions.get("window").width / 2
                      }}
                      source={item.value}
                    ></Image>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          )}
        </View>
      </>
    );
  }
}
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  UserInfo: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "300",
    textAlign: "center"
  },
  ImageDisplayContainer: {
    alignItems: "center",
    borderWidth: 2
  },
  item: {},
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  swipeContainer: {
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row"
  }
});
