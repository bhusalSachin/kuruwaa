import { createContext, useState, useContext } from "react";
import { useUserLocation } from "./UserLocationProvider";

const MapRegion = createContext();

exports.useMapRegion = () => {
  return useContext(MapRegion);
};

const MapRegionProvider = ({ children }) => {
  const { location } = useUserLocation();
  const [region, setRegion] = useState({
    latitude: 27.63820807975935,
    longitude: 84.12604906069109,
    latitudeDelta: 0,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  const provider = (
    <MapRegion.Provider value={(region, onRegionChange)}>
      {children}
    </MapRegion.Provider>
  );

  return provider;
};
export default MapRegionProvider;
