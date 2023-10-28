import React, { useState } from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    color: "#7aa7ff",
  });
  const [error, setError] = useState({
    phone: false,
    email: false,
    name: false,
  });
  const toggleResult = JSON.parse(localStorage.getItem("toggle"));
  const [data, setData] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <UserContext.Provider
      value={{
        value,
        setValue,
        error,
        setError,
        data,
        setData,
        toggle,
        setToggle,
        toggleResult
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
