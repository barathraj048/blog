import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false); // Flag to indicate if user data has been fetched

  useEffect(() => {
    if (!user && !ready) {
      axios.get('/profile')
        .then(userData => {
          setUser(userData.data);
          setReady(true); // Mark user data as fetched
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, [user, ready]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
