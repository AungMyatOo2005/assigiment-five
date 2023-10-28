import React, { useContext, useMemo } from "react";
import "./registration.css";
import UserCard from "./UserCard";
import { UserContext } from "./RegistrationContext";
import Form from "./Form";

function Registration() {
  const { value, data } = useContext(UserContext);
  const isTrue = useMemo(() => data, [data]);
  return (
    <div className="register-container">
      {!isTrue && <Form></Form>}
      {isTrue && <UserCard value={value} />}
    </div>
  );
}

export default Registration;
