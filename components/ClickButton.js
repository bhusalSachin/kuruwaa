import React, { useContext, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useFonts, Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import { variables } from "./variables";

const ClickButton = ({ text, onClickHandler }) => {
  const [isFontLoaded] = useFonts({
    Arapey_400Regular,
  });

  if (!isFontLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => onClickHandler()}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    minWidth: variables.DIMENSIONS.width / 1.5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    backgroundColor: variables.COLOR.primary,
  },
  text: {
    color: "white",
    fontFamily: "Arapey_400Regular",
    fontSize: 20,
    paddingRight: 14,
  },
});

export default ClickButton;
