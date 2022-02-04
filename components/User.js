import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Dashboard from "./Dashboard";
import axios from "axios";
import { variables } from "./variables";
import Menu from "./Menu";
import { useUserContext } from "../contexts/UserContextProvider";

const User = ({ navigation }) => {
  const { loggedinUser, setLoggedinUser } = useUserContext();
  return (
    <View style={{ flex: 1 }}>
      <Dashboard
        loggedinUser={loggedinUser}
        setLoggedinUser={setLoggedinUser}
      />
      <Menu
        navigation={navigation}
        menuArray={variables.MENU.data}
        iconsArray={variables.MENU.icons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: variables.COLOR.primary,
  },
  requests: {
    alignSelf: "center",
    marginVertical: 4,
  },
});

export default User;
