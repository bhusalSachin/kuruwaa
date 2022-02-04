import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts, Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import { variables } from "./variables";

const InputField = ({
  isIcon = false,
  secureTextEntry = false,
  placeholder,
  keyboard = "default",
  onFieldChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [fieldText, setFieldText] = useState("");

  const [isFontLoaded] = useFonts({ Arapey_400Regular });

  if (!isFontLoaded) return <AppLoading />;
  return (
    <View
      style={{
        ...styles.container,
        borderColor: isActive ? variables.COLOR.primary : "#efefef",
      }}>
      {isIcon ? (
        <Feather
          name="search"
          size={24}
          color={isActive ? variables.COLOR.primary : "black"}
          style={styles.searchIcon}
        />
      ) : null}
      <TextInput
        style={styles.input}
        defaultValue={fieldText}
        onChangeText={(text) => {
          setFieldText(text);
          onFieldChange(placeholder, text);
        }}
        onFocus={() => {
          setIsActive(true);
        }}
        placeholder={placeholder}
        autoCorrect={false}
        selectionColor={variables.COLOR.primary}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 6,
  },
  input: {
    padding: 6,
    flex: 1,
    fontSize: 20,
    fontFamily: "Arapey_400Regular",
  },
  searchIcon: {
    padding: 5,
  },
});

export default InputField;
