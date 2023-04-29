import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

const FormDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userName: "",
    number: "",
    age: "",
    country: "",
    image: "",
    userStatus: "",
  });

  const values = {
    userData,
    setUserData,
  };

  return <FormDataContext.Provider value={values}>{children}</FormDataContext.Provider>;
};

export default FormDataContextProvider;
