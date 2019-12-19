import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Image
} from "react-native";
import HeaderBar from "../components/HeaderBar";

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
      modalImage: require("../../../assets/logov3.jpg")
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
      modalImage: this.state.images[imageİd]
    });
    console.log(this.state.images[imageİd]);
  };

  render() {
    return (
      <>
        <HeaderBar />
        <View>
          <Text style={styles.UserInfo}>{this.state.user.name}</Text>
        </View>
        <View style={styles.ImageDisplayContainer}>
          {/**Modal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() =>
              Alert.alert("Modal", "Close Request", [
                {
                  text: "Tamam",
                  onPress: () => {
                    this.setModalVisible(false);
                  }
                }
              ])
            }
          >
            <View style={styles.modal}>
              <TouchableHighlight onPress={() => this.setModalVisible(false)}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              <View>
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={this.state.modalImage}
                ></Image>
              </View>
            </View>
          </Modal>

          {/**FlatList */}
          <FlatList
            data={this.state.images}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => console.log(this.itemClicked(true, item.id))}
              >
                <View style={styles.item}>
                  <Image
                    style={{ height: 200, width: 150 }}
                    source={item.value}
                  ></Image>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            numColumns={2}
          />
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
    borderColor: "green",
    borderWidth: 2
  },
  item: {
    borderColor: "black",
    borderWidth: 2,
    margin: 1,
    justifyContent: "center"
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  closeBtn: {}
});
