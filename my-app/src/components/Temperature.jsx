import React, { useState } from "react";
import "./temperature.css";

function Temperature() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");
  const [read, setRead] = useState({
    completeOne: false,
    completeTwo: false,
  });

  const toFahrenheit = (e) => {
    const fahrenheit = e.target.value;
    setFahrenheit(fahrenheit);
    const result = parseFloat(fahrenheit);
    const toCelsius = ((result - 32) * 5) / 9;
    setCelsius(toCelsius.toFixed(3));
    if (fahrenheit !== "") {
      setRead({ ...read, completeOne: true, completeTwo: false });
    } else {
      setRead({ ...read, completeOne: false, completeTwo: false });
      setCelsius("");
    }
  };

  const toCelsius = (e) => {
    const celsius = e.target.value;
    setCelsius(celsius);
    const result = parseFloat(celsius);
    const toFahrenheit = (result * 9) / 5 + 32;
    setFahrenheit(toFahrenheit.toFixed(3));
    if (celsius !== "") {
      setRead({ ...read, completeOne: false, completeTwo: true });
    } else {
      setRead({ ...read, completeOne: false, completeTwo: false });
      setFahrenheit("");
    }
  };

  const nothing = (e) => {
    return;
  };

  return (
    <div className="temperature-container">
      <div className="temperature-box">
        <h3>Temperature Convert</h3>
        <div className="input-box">
          <div className="input-inside">
            <input
              placeholder="Fahrenheit"
              onChange={read.completeTwo ? nothing : toFahrenheit}
              value={fahrenheit}
              readOnly={read.completeTwo}
            />
            <label>Fahrenheit</label>
          </div>
          <div className="input-inside">
            <input
              placeholder="Degree Celsius"
              value={celsius}
              onChange={read.completeOne ? nothing : toCelsius}
            />
            <label>Degree Celsius</label>
          </div>
          <h4>{read.completeOne && ` ${celsius} °C`}</h4>
          <h4>{read.completeTwo && ` ${fahrenheit} °F`}</h4>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
