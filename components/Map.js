import React, { useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { variables } from "./variables";
import { useUserLocation } from "../contexts/UserLocationProvider";
import { useKuruwaLocation } from "../contexts/KuruwaPositionProvider";

const Map = () => {
  const location = useUserLocation();
  const kuruwalocations = useKuruwaLocation();
  if (location) kuruwalocations.push({ ...location, name: "You" });
  const map = location ? (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0.0421,
      }}>
      {kuruwalocations.map((kuruwa, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: kuruwa.latitude,
              longitude: kuruwa.longitude,
            }}
            title={kuruwa.name}
          />
        );
      })}
    </MapView>
  ) : (
    <>
      <Text>Loading....</Text>
    </>
  );

  return <View style={styles.container}>{map}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
    position: "absolute",
    top: 0,
  },
  map: {
    width: variables.DIMENSIONS.width,
    height: variables.DIMENSIONS.height / 1.1,
  },
});

export default Map;
