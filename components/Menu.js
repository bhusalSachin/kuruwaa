import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { variables } from "./variables";
import {
  Arapey_400Regular,
  Arapey_400Regular_Italic,
  useFonts,
} from "@expo-google-fonts/arapey";
import { MaterialIcons } from "@expo/vector-icons";
import Apploading from "expo-app-loading";

const Menu = ({ navigation, menuArray, iconsArray }) => {
  const [selected, setSelected] = useState(null);

  const [isFontLoaded] = useFonts({
    Arapey_400Regular,
    Arapey_400Regular_Italic,
  });

  if (!isFontLoaded) return <Apploading />;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ overflow: "hidden" }}>
        {menuArray.map((elem, index) => {
          return (
            <React.Fragment key={elem}>
              <TouchableHighlight
                style={{
                  ...styles.touchable,
                  borderWidth: selected === index ? 1 : 0,
                }}
                activeOpacity={0.3}
                onPress={() => {
                  setSelected(index);
                  if (elem === "Recent Requests")
                    navigation.navigate("requests");
                  if (elem === "Log out") navigation.navigate("home");
                }}
                underlayColor="efefef">
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <MaterialIcons
                    name={iconsArray[index]}
                    size={30}
                    color={
                      selected === index
                        ? variables.COLOR.secondary
                        : variables.COLOR.primary
                    }
                  />
                  <Text style={styles.text}>{elem}</Text>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: variables.COLOR.primary,
                  display: index === 5 ? "flex" : "none",
                }}></View>
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
    display: "flex",
    flexDirection: "column",
  },

  touchable: {
    width: "100%",
    height: variables.DIMENSIONS.height / 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: variables.COLOR.primary,
    borderTopWidth: 0,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  text: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontFamily: "Arapey_400Regular",
    color: "black",
  },
});

export default Menu;
