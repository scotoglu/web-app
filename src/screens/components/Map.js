import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
export default class Maps extends Component {
  constructor() {
    super();
    this.state = {
      latLng: {
        latitude: 37.0526809,
        longitude: 35.2977791
      }
    };
  }
  render() {
    return (
      <View style={styles.Maps}>
        <MapView
          zoomEnabled={false}
          style={{ height: 250, width: 310 }}
          initialRegion={{
            latitude: 37.0526809,
            longitude: 35.2977791,
            latitudeDelta: 0.02, //0'a yaklaştıkça zoom artar.
            longitudeDelta: 0.02
          }}
        >
          <Marker coordinate={this.state.latLng}></Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
