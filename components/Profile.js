import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Dashboard from "./Dashboard";
import { variables } from "./variables";
import { useClientContext } from "../contexts/ClientContextProvider";
import ClickButton from "./ClickButton";
import axios from "axios";

const Profile = () => {
  const { clientLoggedinUser, setClientLoggedInUser } = useClientContext();
  const [callkuruwaArray, setCallkuruwaArray] = useState([]);
  const [showPatients, setShowPatients] = useState(false);

  useEffect(async () => {
    const allCallKuruwa = await axios.get(
      "https://kuruwaserver.herokuapp.com/getcallkuruwa"
    );
    console.log(allCallKuruwa.data.message, typeof allCallKuruwa.data.message);
    setCallkuruwaArray(allCallKuruwa.data.message);
  }, []);

  const onShowPatients = async () => {
    setShowPatients(!showPatients);
  };

  return (
    <View style={{ flex: 1 }}>
      <Dashboard
        loggedinUser={clientLoggedinUser}
        setLoggedinUser={setClientLoggedInUser}
      />
      <View style={styles.patients}>
        <ClickButton
          text={"Your recent registered patients"}
          onClickHandler={onShowPatients}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            overflow: "hidden",
            display: !showPatients ? "none" : "flex",
          }}>
          {callkuruwaArray.map((call) => {
            return (
              <React.Fragment key={call}>
                <View style={styles.request}>
                  <Text style={styles.text}>Name: {call.username}</Text>
                  <Text style={styles.text}>Phone: {call.phonenumber}</Text>
                  <Text style={styles.text}>Hospital: {call.hospital}</Text>
                </View>
              </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: variables.COLOR.primary,
  },
  request: {
    alignSelf: "center",
    marginVertical: 4,
  },
  patients: {
    position: "absolute",
    top: variables.DIMENSIONS.height / 2,
    left: 20,
  },
});

export default Profile;
