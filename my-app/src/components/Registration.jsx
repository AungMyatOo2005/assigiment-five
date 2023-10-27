import React, { useState } from "react";
import "./registration.css";

function Registration() {
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

  const formArr = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Enter your Name",
      label: "Name",
      errorMessage: "Name must be 3-8 characters",
      pattern: "^[A-Za-z1-9]{3,8}$",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Enter your Email",
      label: "Email",
      errorMessage: "Email is required",
    },
    {
      id: 3,
      type: "number",
      name: "phone",
      placeholder: "Enter your Phone Number",
      label: "Phone Number",
      errorMessage: "Phone number is required",
    },
  ];

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    formArr.forEach((data) => {
      setError((prevError) => ({
        ...prevError,
        [data.name]: value[data.name] === "" ? true : false,
      }));
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formArr.forEach((data) => {
      setError((prevError) => ({
        ...prevError,
        [data.name]: value[data.name] === "" ? true : false,
      }));
    });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={onSubmit}>
        <h1>Register</h1>
        <div className="form-box">
          {formArr.map((data) => (
            <div key={data.id}>
              <label>{data.label}</label>
              <input
                name={data.name}
                placeholder={data.placeholder}
                type={data.type}
                pattern={data.pattern}
                value={value[data.name]}
                onChange={onChange}
              />
              {error[data.name] && (
                <span className="error-message">{data.errorMessage}</span>
              )}
              {error[data.name] === false && <span className="error-message-two">{data.errorMessage}</span>}
            </div>
          ))}
          <div>
            <label>Select Card Color</label>
            <select name="color" value={value.color} onChange={onChange}>
              <option disabled={true} value="">
                --Choose an option--
              </option>
              <option value="#7aa7ff">Blue</option>
              <option value="#fff67a">Yellow</option>
              <option value="#ff8cfb">Pink</option>
              <option value="#fc9e51">Orange</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
