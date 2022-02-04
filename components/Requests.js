import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { variables } from "./variables";
import {
  Arapey_400Regular,
  Arapey_400Regular_Italic,
  useFonts,
} from "@expo-google-fonts/arapey";
import Apploading from "expo-app-loading";
import axios from "axios";
import ClickButton from "./ClickButton";

const Requests = ({ navigation }) => {
  const [callkuruwaArray, setCallkuruwaArray] = useState([]);
  useEffect(async () => {
    const allCallKuruwa = await axios.get(
      "https://kuruwaserver.herokuapp.com/getcallkuruwa"
    );
    console.log(allCallKuruwa.data.message, typeof allCallKuruwa.data.message);
    setCallkuruwaArray(allCallKuruwa.data.message);
  }, []);

  const onButtonClick = () => {
    console.log("clicked");
  };

  const [isFontLoaded] = useFonts({
    Arapey_400Regular,
    Arapey_400Regular_Italic,
  });

  if (!isFontLoaded) return <Apploading />;

  return (
    <View style={styles.container}>
      {callkuruwaArray.length !== 0 ? (
        <>
          <Text style={styles.header}>
            Here Are the recent kuruwa requests:
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.header}>There are no requests yet!</Text>
        </>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ overflow: "hidden" }}>
        {callkuruwaArray.map((call) => {
          return (
            <React.Fragment key={call}>
              <View style={styles.request}>
                <Text style={styles.text}>Name: {call.username}</Text>
                <Text style={styles.text}>Phone: {call.phonenumber}</Text>
                <Text style={styles.text}>Hospital: {call.hospital}</Text>

                <View>
                  <ClickButton text="Accept" onClickHandler={onButtonClick} />
                </View>
                <View>
                  <ClickButton text="Reject" onClickHandler={onButtonClick} />
                </View>
              </View>
            </React.Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "Arapey_400Regular",
    color: variables.COLOR.secondary,
  },
  request: {
    height: variables.DIMENSIONS.height / 3,
    borderWidth: 2,
    borderColor: variables.COLOR.primary,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    textAlign: "center",
    padding: 8,
    fontSize: 24,
    fontFamily: "Arapey_400Regular",
    color: "black",
    width: "100%",
  },
});

export default Requests;
