import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import InputField from "./InputField";
import { variables } from "./variables";
import { Arapey_400Regular_Italic, useFonts } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import axios from "axios";
import { useClientContext } from "../contexts/ClientContextProvider";

const ClientLogin = ({ navigation }) => {
  const [user, setUser] = useState({ email: null, password: null });
  const [error, setError] = useState(null);
  const { clientLoggedinUser, setClientLoggedInUser } = useClientContext();

  const onUserChange = (type, text) => {
    switch (type) {
      case "Email": {
        setUser({ ...user, email: text });
        break;
      }
      case "Password": {
        setUser({ ...user, password: text });
        break;
      }
      default:
        break;
    }
  };

  const handleLogin = async () => {
    try {
      // const res = await axios.post("http://192.168.1.40:8000/login", user);
      const res = await axios.post(
        "https://kuruwaserver.herokuapp.com/clientlogin",
        user
      );
      console.log("got login response", res.data);

      if (res.data.success) {
        console.log("You are welcome ", res.data);
        setClientLoggedInUser(res.data.client);
        console.log("setCilentLoggeInUser = ", res.data.client);
        navigation.navigate("client");
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log("Post failed", error.message);
    }
  };

  const [isFontLoaded] = useFonts({ Arapey_400Regular_Italic });

  if (!isFontLoaded) return <AppLoading />;

  return (
    <View style={{ flex: 1 }}>
      {/* Header text */}
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
          Client Login
        </Text>
        {/* UnderLine */}
        <View
          style={{
            borderWidth: 1,
            borderColor: variables.COLOR.primary,
          }}></View>
      </View>

      {/* Creating form using InputField component */}
      <View
        style={{
          marginVertical: variables.DIMENSIONS.height / 3,
          padding: 10,
        }}>
        <Text style={{ color: "red" }}>{error}</Text>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Email" onFieldChange={onUserChange} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField
            placeholder="Password"
            onFieldChange={onUserChange}
            secureTextEntry={true}
          />
        </View>

        {/* Button to submit the form */}
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
            onPress={handleLogin}>
            <Text
              style={{
                color: "white",
                fontFamily: "Arapey_400Regular_Italic",
                fontSize: 24,
                textAlign: "center",
              }}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ClientLogin;
