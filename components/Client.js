import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { variables } from "./variables";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Client({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View
        style={{
          borderWidth: 1,
          width: variables.DIMENSIONS.width,
          borderColor: variables.COLOR.secondary,
        }}></View>
      <View style={styles.hospital}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("land")}>
          <>
            <FontAwesome5
              name="hospital-user"
              size={70}
              color={variables.COLOR.primary}
            />
            <Text>Seek for kuruwaa</Text>
          </>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <Navbar navigation={navigation} page={"home"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: variables.DIMENSIONS.width / 2,
    height: variables.DIMENSIONS.height / 4,
  },
  hospital: {
    width: variables.DIMENSIONS.width / 3,
    borderWidth: 1,
    borderColor: variables.COLOR.secondary,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: variables.DIMENSIONS.height / 12,
    backgroundColor: "white",
  },
});
