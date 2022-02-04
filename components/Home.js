import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import BackgroundEffect from "./BackgroundEffect";
import Logo from "./Logo";
import ClickButton from "./ClickButton";
import { variables } from "./variables";
import { useUserContext } from "../contexts/UserContextProvider";
import useSecureStore from "../hooks/useSecureStore";

const Home = ({ navigation }) => {
  const [token, setToken] = useSecureStore("signedToken", null);
  const { loggedinUser, setLoggedInUser } = useUserContext();

  useEffect(() => {
    setLoggedInUser(token != null ? token.user : null);

    if (loggedinUser != null) navigation.navigate("user");
  }, []);

  const onKuruwaHandler = () => {
    navigation.navigate("login");
  };
  const onClientHandler = () => {
    navigation.navigate("land");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.smallTitle}>Welcome to the</Text>
        <Text style={styles.largeTitle}>Kuruwaa</Text>
        <Text style={styles.slogan}>We take care of your loved ones.</Text>
      </View>
      <View style={styles.buttons}>
        <ClickButton
          text={"Are you a Kuruwa?"}
          onClickHandler={onKuruwaHandler}
        />
        <ClickButton
          text={"Looking for a Kuruwa?"}
          onClickHandler={onClientHandler}
        />
      </View>
      <BackgroundEffect />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    zIndex: 100,
    padding: 10,
  },
  smallTitle: {
    color: "#fff",
    fontSize: 25,
    padding: 5,
  },
  largeTitle: {
    fontSize: 70,
    fontWeight: "800",
    color: variables.COLOR.secondary,
    textShadowColor: "white",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontStyle: "italic",
  },

  slogan: {
    fontSize: 14,
    alignSelf: "center",
    color: "#fff",
    fontStyle: "italic",
  },
  logo: {
    zIndex: 100,
    width: variables.DIMENSIONS.width / 2,
    height: variables.BACKGROUND.height,
  },
  buttons: {
    zIndex: 100,
    width: "50%",
    position: "absolute",
    left: variables.DIMENSIONS.width / 6,
    bottom: variables.DIMENSIONS.height / 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Home;
