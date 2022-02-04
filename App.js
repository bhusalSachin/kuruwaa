import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Land from "./components/Land";
import User from "./components/User";
import ClientLogin from "./components/ClientLogin";
import ClientSignUp from "./components/ClientSignUp";
import Requests from "./components/Requests";
import Client from "./components/Client";
import Profile from "./components/Profile";
import More from "./components/More";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "./contexts/UserContextProvider";
import UserLocationProvider from "./contexts/UserLocationProvider";
import ClientContextProvider from "./contexts/ClientContextProvider";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <ClientContextProvider>
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
                <Stack.Screen name="client" component={Client} />
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="requests" component={Requests} />
                <Stack.Screen name="clientlogin" component={ClientLogin} />
                <Stack.Screen name="clientsignup" component={ClientSignUp} />
                <Stack.Screen name="more" component={More} />
              </Stack.Navigator>
              <StatusBar style="auto" />
            </NavigationContainer>
          </UserLocationProvider>
        </UserContextProvider>
      </ClientContextProvider>
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
