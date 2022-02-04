import { createContext, useState, useContext } from "react";

const ClientContext = createContext();

export const useClientContext = () => {
  return useContext(ClientContext);
};

const ClientContextProvider = ({ children }) => {
  const [clientLoggedinUser, setClientLoggedInUser] = useState(null);

  const provider = (
    <ClientContext.Provider
      value={{ clientLoggedinUser, setClientLoggedInUser }}>
      {children}
    </ClientContext.Provider>
  );

  return provider;
};

export default ClientContextProvider;
