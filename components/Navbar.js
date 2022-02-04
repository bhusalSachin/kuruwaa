import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { variables } from "./variables";

const Navbar = ({ navigation }) => {
  const icons = ["home", "activity", "inbox", "user", "more-horizontal"];
  return (
    <View style={styles.container}>
      {icons.map((item, index) => {
        return (
          <TouchableHighlight
            style={styles.touchIcon}
            key={index}
            onPress={() => {
              if (item === "user") {
                navigation.navigate("profile");
              }
              if (item === "more-horizontal") {
                navigation.navigate("more");
              }
            }}
            activeOpacity={0.3}
            underlayColor="#fff">
            <>
              <Feather
                name={item}
                size={34}
                color="black"
                style={styles.icon}
              />
              <Text style={{ color: variables.COLOR.secondary }}>
                {item === "more-horizontal"
                  ? "more"
                  : item === "user"
                  ? "profile"
                  : item}
              </Text>
            </>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
  },
  icon: {
    marginHorizontal: (variables.DIMENSIONS.width - 5 * 30) / 10,
    color: variables.COLOR.secondary,
  },
  touchIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
