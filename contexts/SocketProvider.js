import React, { useContext, useState, useEffect } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ user, id, children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    // const newSocket = io("http://192.168.1.40:8000/", {
    //   transports: ["websocket"],
    // });
    const newSocket = io("wss://kuruwaserver.herokuapp.com/", {
      transports: ["websocket"],
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
