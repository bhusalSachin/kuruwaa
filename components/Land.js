import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Map from "./Map";
import ClickButton from "./ClickButton";
import InputField from "./InputField";
import KuruwaPositionProvider from "../contexts/KuruwaPositionProvider";
import axios from "axios";

const Land = ({ navigation }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [name, setName] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [hospital, setHospital] = React.useState(null);
  const [err, setErr] = React.useState(null);
  const PLACEHOLDER_NAME = "Enter your name here";
  const PLACEHOLDER_PHONE = "Enter your phone number here";
  const PLACEHOLDER_HOSPITAL = "Enter hospital name here";

  const onCallKuruwaHandler = () => {
    setIsClicked(!isClicked);
  };
  const onCallHandler = async () => {
    try {
      const callkuruwaResponse = await axios.post(
        "https://kuruwaserver.herokuapp.com/callkuruwa",
        {
          username: name,
          phonenumber: phone,
          hospital,
        }
      );
      console.log("post resoponse, ", callkuruwaResponse.data.message);
      if (callkuruwaResponse.data.success) {
        setErr(null);
        const allExpoPushTokens = await axios.get(
          "https://kuruwaserver.herokuapp.com/allpushtokens"
        );

        const tokenArray = allExpoPushTokens.data.message.filter(
          (elem) => elem !== null && elem !== ""
        );

        console.log("all tokens ", tokenArray);
        const response = await axios.post(
          "https://exp.host/--/api/v2/push/send",
          JSON.stringify({
            to: tokenArray,
            title: "From Kuruwa",
            body: "Someone is calling for kuruwaa. Open Kuruwaa dashboard to see the details.",
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        Alert.alert(
          "From Kuruwaa",
          "An alert message is sent to all the kuruwaas. They will try to contact you soon."
        );
      } else {
        setErr(callkuruwaResponse.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const onTextChange = (type, text) => {
    if (type === PLACEHOLDER_PHONE) setPhone(text);
    else if (type === PLACEHOLDER_HOSPITAL) setHospital(text);
    else if (type == PLACEHOLDER_NAME) setName(text);
    else return;
  };

  return (
    <View style={styles.container}>
      <KuruwaPositionProvider>
        <Map />
      </KuruwaPositionProvider>
      <View style={styles.buttons}>
        <ClickButton
          text="Call a Kuruwaa"
          onClickHandler={onCallKuruwaHandler}
        />
        {isClicked && (
          <>
            <Text style={{ color: "red" }}>{err}</Text>
            <InputField
              placeholder={PLACEHOLDER_NAME}
              onFieldChange={onTextChange}
            />
            <InputField
              placeholder={PLACEHOLDER_PHONE}
              keyboard="numeric"
              onFieldChange={onTextChange}
            />
            <InputField
              placeholder={PLACEHOLDER_HOSPITAL}
              onFieldChange={onTextChange}
            />
            <ClickButton text="Send" onClickHandler={onCallHandler} />
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 10,
  },
});

export default Land;
