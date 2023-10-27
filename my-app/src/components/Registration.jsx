import React, { useState } from "react";
import "./registration.css";

function Registration() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    color: "#7aa7ff",
  });

  const formArr = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Enter your Name",
      label: "Name",
      errorMessage: "Name must be 3-8 characters",
    },
    {
      id: 2,
      type: "text",
      name: "email",
      placeholder: "Enter your Email",
      label: "Email",
      errorMessage: "Email is required",
    },
    {
      id: 3,
      type: "tel",
      name: "phone",
      placeholder: "Enter your Phone Number",
      label: "Phone Number",
      errorMessage: "Phone number is required",
    },
  ];

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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
              <span className="error-message">{data.errorMessage}</span>
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
              <option
                value="background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 51%, #FFCC70 95%);"
              >
                Rainbow
              </option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
