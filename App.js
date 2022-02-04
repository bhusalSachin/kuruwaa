import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Land from "./components/Land";
import User from "./components/User";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "./contexts/UserContextProvider";
import UserLocationProvider from "./contexts/UserLocationProvider";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <UserContextProvider>
        <UserLocationProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="home"
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="land" component={Land} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="signup" component={SignUp} />
              <Stack.Screen name="user" component={User} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </UserLocationProvider>
      </UserContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
