import React, { useContext } from "react";
import { UserContext } from "./RegistrationContext";

function Form() {
  const { value, setValue, error, setError, setData } =
    useContext(UserContext);
  const formArr = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Enter your Name",
      label: "Name",
      errorMessage: "Name must be 3-16 characters",
      pattern: "^[A-Za-z\\s+]{3,16}$",
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
      type: "text",
      name: "phone",
      placeholder: "Enter your Phone Number",
      label: "Phone Number",
      errorMessage: "Phone number is required",
      pattern: "^09[0-9]{7,15}$",
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
    let isValid = true;
    formArr.forEach((data) => {
      const { name } = data;
      if (value[name] === "") {
        setError((prevError) => ({ ...prevError, [name]: true }));
        isValid = false;
      } else {
        setError((prevError) => ({ ...prevError, [name]: false }));
      }
    });
    if (isValid) {
      setData(true);
    }
  };

  return (
    <div className="form-container">
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
              {error[data.name] === false && (
                <span className="error-message-two">{data.errorMessage}</span>
              )}
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
              <option value="linear-gradient(90deg, rgba(193,219,213,1) 0%, rgba(218,78,219,1) 23%, rgba(150,232,233,1) 60%, rgba(163,133,214,1) 89%),rgb(193,219,213)">
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

export default Form;
