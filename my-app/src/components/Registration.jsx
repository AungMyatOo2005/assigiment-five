import React, { useContext } from "react";
import "./registration.css";
import UserCard from "./UserCard";
import { UserContext } from "./RegistrationContext";
import Form from "./Form";

function Registration() {
  const { value ,data  } = useContext(UserContext)

  return (
    <div className="register-container">
      {!data && <Form></Form>}
      {data && <UserCard value={value}/>}
    </div>
  );
}

export default Registration;
