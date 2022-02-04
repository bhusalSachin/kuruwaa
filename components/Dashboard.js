import { View, Text, Alert } from "react-native";
import { variables } from "./variables";
import Logo from "./Logo";
import { Feather } from "@expo/vector-icons";

const Dashboard = ({ loggedinUser, setLoggedinUser }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        marginLeft: 10,
        padding: 10,
      }}>
      <View
        style={{
          height: variables.DIMENSIONS.height / 4,
          display: "flex",
          flexDirection: "column",
        }}>
        <View>
          <Logo />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
          }}>
          <Feather
            style={{
              borderWidth: 1,
              borderColor: variables.COLOR.primary,
              width: variables.DIMENSIONS.width / 3.5,
              borderRadius: 40,
              overflow: "hidden",
              alignContent: "center",
              padding: 8,
              backgroundColor: "#d3d3d3",
              color: "white",
            }}
            name="user-plus"
            size={80}
            color="black"
          />
          <Text
            style={{
              fontFamily: "Arapey_400Regular_Italic",
              color: variables.COLOR.secondary,
              fontSize: 50,
              padding: 7,
            }}>
            {loggedinUser.username}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: variables.COLOR.primary,
          }}></View>
      </View>
    </View>
  );
};

export default Dashboard;
