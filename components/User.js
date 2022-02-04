import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Dashboard from "./Dashboard";
import axios from "axios";
import { variables } from "./variables";

const User = ({ navigation }) => {
  const [callkuruwaArray, setCallkuruwaArray] = useState([]);
  useEffect(async () => {
    const allCallKuruwa = await axios.get(
      "https://kuruwaserver.herokuapp.com/getcallkuruwa"
    );
    console.log(allCallKuruwa.data.message, typeof allCallKuruwa.data.message);
    setCallkuruwaArray(allCallKuruwa.data.message);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Dashboard />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}>
        {callkuruwaArray.length !== 0 ? (
          <>
            <Text style={{ fontSize: 22, color: variables.COLOR.secondary }}>
              Here Are the recent kuruwa requests:
            </Text>
          </>
        ) : null}
        {callkuruwaArray.map((call) => {
          return (
            <View key={call} style={styles.requests}>
              <Text style={styles.text}>Name: {call.username}</Text>
              <Text style={styles.text}>Phone: {call.phonenumber}</Text>
              <Text style={styles.text}>Hospital: {call.hospital}</Text>
            </View>
          );
        })}
      </View>
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
