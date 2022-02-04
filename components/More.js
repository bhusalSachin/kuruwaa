import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "./Menu";

export default function More({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Menu
        navigation={navigation}
        menuArray={[
          "Settings",
          "Langugae",
          "Privacy Policy",
          "About us",
          "Tell a friend",
          "Help",
          "Log out",
        ]}
        iconsArray={[
          "settings",
          "language",
          "policy",
          "people",
          "emoji-people",
          "feedback",
          "logout",
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
