import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function AppMapView({ longitude = 71.19, latitude = 22.258 }) {
  return (
    <MapView
      provider={"google"} // remove if not using Google Maps
      style={styles.mapStyle}
      zoomEnabled={true}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} title={"Sellers Location"} />
    </MapView>
  );
}
const styles = StyleSheet.create({
  mapStyle: {
    height: 200,
  },
});
