import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [loggedinUser, setLoggedInUser] = useState(null);

  const provider = (
    <UserContext.Provider value={{ loggedinUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );

  return provider;
};

export default UserContextProvider;
