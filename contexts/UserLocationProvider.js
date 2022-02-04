import React, { useState, useEffect, createContext, useContext } from "react";
import * as Location from "expo-location";

const UserLocation = createContext();

export const useUserLocation = () => {
  return useContext(UserLocation);
};

const UserLocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <UserLocation.Provider value={location}>{children}</UserLocation.Provider>
  );
};

export default UserLocationProvider;
