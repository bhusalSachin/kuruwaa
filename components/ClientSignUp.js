import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight, Platform } from "react-native";
import InputField from "./InputField";
import { variables } from "./variables";
import { Arapey_400Regular_Italic, useFonts } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import axios from "axios";

const ClientSignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: null,
    email: null,
    phonenumber: null,
    password: null,
  });
  const [error, setError] = useState(null);

  const onUserChange = (type, text) => {
    switch (type) {
      case "Username":
        setUser({ ...user, username: text });
        break;
      case "Email":
        setUser({ ...user, email: text });
        break;
      case "Phone no.":
        setUser({ ...user, phonenumber: text });
        break;
      case "Password":
        setUser({ ...user, password: text });
        break;
      default:
        break;
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://kuruwaserver.herokuapp.com/clientsignup",
        user
      );

      if (response.data.success) {
        setError(null);
        navigation.navigate("clientlogin");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const [isFontLoaded] = useFonts({ Arapey_400Regular_Italic });

  if (!isFontLoaded) return <AppLoading />;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignSelf: "flex-start",
          position: "absolute",
          top: variables.DIMENSIONS.height / 4,
          left: 15,
        }}>
        <Text
          style={{
            fontSize: 50,
            fontFamily: "Arapey_400Regular_Italic",
            color: variables.COLOR.primary,
          }}>
          Client Register
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: variables.COLOR.primary,
          }}></View>
      </View>
      <View
        style={{
          marginVertical: variables.DIMENSIONS.height / 3,
          padding: 10,
        }}>
        <Text style={{ color: "red" }}>{error}</Text>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Username" onFieldChange={onUserChange} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Email" onFieldChange={onUserChange} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Phone no." onFieldChange={onUserChange} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField
            placeholder="Password"
            onFieldChange={onUserChange}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{ width: "50%", alignSelf: "flex-end", marginVertical: 10 }}>
          <TouchableHighlight
            style={{
              width: "100%",
              backgroundColor: variables.COLOR.primary,
              borderRadius: 20,
              height: 40,
              justifyContent: "center",
            }}
            activeOpacity={0.3}
            underlayColor="efefef"
            onPress={() => handleSignUp()}>
            <Text
              style={{
                color: "white",
                fontFamily: "Arapey_400Regular_Italic",
                fontSize: 24,
                textAlign: "center",
              }}>
              Register
            </Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 6,
          }}>
          <Text style={{ color: "black", fontSize: 16 }}>
            Already have an account?{" "}
          </Text>
          <TouchableHighlight
            activeOpacity={0.3}
            underlayColor="efefef"
            onPress={() => navigation.navigate("clientlogin")}>
            <Text
              style={{
                textDecorationLine: "underline",
                color: variables.COLOR.primary,
                fontSize: 17,
              }}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ClientSignUp;
