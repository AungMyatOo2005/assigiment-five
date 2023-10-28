import React,{useState} from "react";

export const UserContext=React.createContext();

const UserProvider= ({children})=>{
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
      const [data, setData] = useState(false);

    return (
      <UserContext.Provider value={{ value, setValue, error, setError, data, setData }}>
        {children}
      </UserContext.Provider>
    );
}
export default UserProvider