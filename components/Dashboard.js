import React, { useContext, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { useUserContext } from "../contexts/UserContextProvider";
import { variables } from "./variables";
import Logo from "./Logo";

const Dashboard = () => {
  const { loggedinUser, setLoggedinUser } = useUserContext();
  return (
    <View style={{ flex: 1, marginTop: 40, marginLeft: 10, padding: 10 }}>
      <View
        style={{
          height: variables.DIMENSIONS.height / 4,
          display: "flex",
          flexDirection: "column",
        }}>
        <View>
          <Logo />
        </View>
        <Text
          style={{
            fontFamily: "Arapey_400Regular_Italic",
            color: variables.COLOR.secondary,
            fontSize: 40,
            padding: 10,
          }}>
          {loggedinUser.username}
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: variables.COLOR.secondary,
          }}></View>
      </View>
    </View>
  );
};

export default Dashboard;
