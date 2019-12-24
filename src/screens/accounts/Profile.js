import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  SafeAreaView,
  AsyncStorage
} from "react-native";
import Modal from "react-native-modal";
import HeaderBar from "../components/HeaderBar";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

export default class Profile extends Component {
  PhotoProgress = [
    "Çekim Bekleniyor...",
    "Fotoğraflar Hazırlanıyor...",
    "Kontrol Yapılıyor...",
    "Yüklenmesi Bekleniyor..."
  ];
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Sefa ÇOTOĞLU",
        //state of ımages 0, 1, 2 and  3.
        stateOfPhoto: "3"
      },
      images: [],
      modalVisible: false
    };

    this.createDatas = this.createDatas.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
    this.listEmpty = this.listEmpty.bind(this);
    this.signOut = this.signOut.bind(this);
    this.userAlreadylogin = this.userAlreadylogin.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.userAlreadylogin();
    this.createDatas();
    // this.test();
  }

  userAlreadylogin = async () => {
    //I'll check with jwt token after the api request
    try {
      console.log("Profile userAlreadyLogin Ok...");

      const logKey = await AsyncStorage.getItem("mail");
      if (logKey != null) {
        return null;
      } else {
        Actions.login();
      }
    } catch (error) {
      console.log("Profile userAlreadyLogin control  " + error);
    }
  };
  fetchImages = () => {
    //request to Api for images
    if (this.state.user.stateOfPhoto === "3") {
      /**
       * 
       * 
       * 
       * 
       
      this.setState({
        images:gelenResimler
      })*/
    }
  };

  //sample data for test
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
  //Open and close modal
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  //open and start modal swiper from selected image as image id.
  itemClicked = (visible, imageİd) => {
    this.setState({ modalVisible: visible });
    this.setState({
      modalImageId: imageİd
    });
  };

  //test function for outputs
  test = () => {
    let index = parseInt(this.state.stateOfPhoto);
    this.PhotoProgress[parseInt(this.state.stateOfPhoto)];
    console.log(index);
  };

  //if flatlist data not fill yet,then func will work from FlatList > ListEmptyComponent.
  listEmpty = () => {
    return (
      <View style={styles.activityIndicatorView}>
        <ActivityIndicator size="large" color="#95a5a6"></ActivityIndicator>
        <Text>Yükleniyor</Text>
      </View>
    );
  };

  signOut = async () => {
    console.log("Clicked....");

    try {
      await AsyncStorage.removeItem("mail");
      Actions.login();
    } catch (error) {}
  };
  render() {
    const isImageReady = this.state.user.stateOfPhoto === "3" ? true : false;
    return (
      <>
        <HeaderBar />
        <View>
          <View style={styles.TopLeftSide}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.UserInfo}>Sayın {this.state.user.name}</Text>
              <TouchableOpacity style={styles.ExitIcon} onPress={this.signOut}>
                <Icon name="times-circle" size={25}></Icon>
              </TouchableOpacity>
            </View>
            {isImageReady ? (
              <Text style={styles.WebAdress}>
                Fotoğraflarınızı, web sitemizi ziyaret ederek indirebilirsiniz.
              </Text>
            ) : // <Text style={styles.WebAdress}>
            //   {this.PhotoProgress[parseInt(this.state.user.stateOfPhoto)]}
            // </Text>
            null}
          </View>
          {/* <View style={styles.TopRightSide}>
            <Icon name="times-circle" size={24} color="red" />
          </View> */}
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

          {isImageReady ? (
            <SafeAreaView
              style={{
                alignItems: "center",
                padding: 10,
                backgroundColor: "white"
              }}
            >
              <FlatList
                ListEmptyComponent={() => this.listEmpty()}
                contentContainerStyle={{
                  paddingBottom: "35%"
                }}
                data={this.state.images}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.itemClicked(true, item.id)}
                  >
                    <View style={styles.flatListImageView}>
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
            </SafeAreaView>
          ) : (
            <>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "100",
                  marginTop: 10
                }}
              >
                Fotoğraflarınız hazır olunca, burada görüntülencektir. Yüklenene
                kadar durumunu burada takip edebilirsiniz.
              </Text>
              <View style={styles.stepsOfPhotoView}>
                {this.PhotoProgress.map((steps, index) => (
                  <Text
                    key={index}
                    style={
                      index <= parseInt(this.state.user.stateOfPhoto)
                        ? styles.activeStep
                        : styles.inactiveSteps
                    }
                  >
                    {steps}
                  </Text>
                ))}
              </View>
            </>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  TopLeftSide: {
    width: "100%",
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center"
  },
  ExitIcon: {
    marginLeft: 40
  },

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
  flatListImageView: {
    margin: 1
  },
  flatListImage: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2 - 10,
    borderRadius: 20
  },
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
    width: "100%",
    marginTop: 30
  },

  stepsOfPhotoView: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: null
  },
  activeStep: {
    fontSize: 20,
    fontWeight: "400",
    color: "green"
  },
  inactiveSteps: {
    fontSize: 15,
    fontWeight: "400",
    color: "red"
  }
});
