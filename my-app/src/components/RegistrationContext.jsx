import React, { useState,useReducer } from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const todoList = (value, action) => {
      // eslint-disable-next-line default-case
      switch (action.type) {
        case "ADD_TODO":
          return [...value, { text: action.text, complete: false }];
        case "DELETE_TODO":
          return value.filter((_, index) => index !== action.index);
        case "LINE_THROUGH":
          return value.map((todo, index) => {
            if (index === action.index) {
              return { ...todo, complete: !todo.complete };
            }
            return todo;
          });
      }
    };
  const [todo, dispatch] = useReducer(todoList, []);
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
  const [pageName,setPageName]=useState("")
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
        toggleResult,
        pageName,
        setPageName,
        todo,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
