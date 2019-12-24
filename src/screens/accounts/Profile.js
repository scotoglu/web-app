import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
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
        stateOfPhoto: 3
      },
      images: [],
      modalVisible: false
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
        value: require("../../../assets/1.jpg")
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
  };

  render() {
    const isImageReady = this.state.stateOfPhoto == 3 ? true : false;
    return (
      <>
        <HeaderBar />
        <View>
          <Text style={styles.UserInfo}>Sayın, {this.state.user.name}</Text>
          {isImageReady ? (
            <Text style={styles.WebAdress}>
              Fotoğraflarınızı, web sitemizi ziyaret ederek indirebilirsiniz.
            </Text>
          ) : (
            this.state.stateOfPhoto
          )}
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
                  <View key={parseInt(url.id)} style={styles.swiperImagesView}>
                    <Image
                      style={styles.swiperImages}
                      source={url.value}
                    ></Image>
                  </View>
                ))}
              </Swiper>
            </View>
          </Modal>

          {/**FlatList */}

          {this.state.images.length <= 0 ? (
            <View style={styles.activityIndicatorView}>
              <ActivityIndicator
                size="large"
                color="#95a5a6"
              ></ActivityIndicator>
              <Text>Yükleniyor</Text>
            </View>
          ) : (
            <FlatList
              contentContainerStyle={{ paddingBottom: "35%" }}
              data={this.state.images}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.itemClicked(true, item.id)}
                >
                  <View style={styles.item}>
                    <Image
                      resizeMethod="scale"
                      style={styles.flatListImage}
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

const styles = StyleSheet.create({
  UserInfo: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "300",
    textAlign: "center"
  },
  ImageDisplayContainer: {
    alignItems: "center",
    borderWidth: 0
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
  },
  WebAdress: {
    fontSize: 12,
    fontWeight: "300",
    margin: 2,
    textAlign: "center"
  },
  swiperImagesView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  swiperImages: {
    height: "100%",
    width: "100%"
  },
  activityIndicatorView: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%"
  },
  flatListImage: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2
  }
});
