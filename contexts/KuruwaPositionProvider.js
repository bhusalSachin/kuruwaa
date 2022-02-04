import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const KuruwaPosition = createContext();

export const useKuruwaLocation = () => {
  return useContext(KuruwaPosition);
};

const KuruwaPositionProvider = ({ children }) => {
  const [kuruwaLocation, setKuruwaLocation] = useState([]);

  useEffect(() => {
    // console.log("rendering kuruwapositions....");
    const getAllKuruwaLocation = async () => {
      try {
        const response = await axios.get(
          "https://kuruwaserver.herokuapp.com/kuruwalocations"
        );
        console.log("got locations", response.data.message);
        return response.data.message;
      } catch (err) {
        console.log(err.message);
        return;
      }
    };

    // setKuruwaLocation(getAllKuruwaLocation());

    getAllKuruwaLocation()
      .then((locations) => setKuruwaLocation(locations))
      .catch((err) => console.log(err.message));
  }, []);

  const provider = (
    <KuruwaPosition.Provider value={kuruwaLocation}>
      {children}
    </KuruwaPosition.Provider>
  );

  return provider;
};

export default KuruwaPositionProvider;
