import React, { useState } from "react";
import "./temperature.css";

function Temperature() {
  const [inputTemperature, setInputTemperature] = useState("");
  const [outputTemperature, setOutputTemperature] = useState("");
  const [inputUnit, setInputUnit] = useState("fahrenheit");
  const [outputUnit, setOutputUnit] = useState("celsius");

  const handleChange = (e) => {
    setInputTemperature(e.target.value);
    convertTemperature(e.target.value);
  };

  const convertTemperature = (value) => {
    if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
      const fahrenheit = parseFloat(value);
      const celsius = ((fahrenheit - 32) * 5) / 9;
      setOutputTemperature(celsius.toFixed(2));
    } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
      const celsius = parseFloat(value);
      const fahrenheit = (celsius * 9) / 5 + 32;
      setOutputTemperature(fahrenheit.toFixed(2));
    }
  };

  const switchUnits = () => {
    setInputUnit(outputUnit);
    setOutputUnit(inputUnit);
    convertTemperature(inputTemperature);
  };

  return (
    <div className="temperature-container">
      <div className="temperature-box">
        <h3>Temperature Converter</h3>
        <div className="input-box">
          <div className="input-inside">
            <input
              placeholder={
                inputUnit === "fahrenheit" ? "Fahrenheit" : "Degree Celsius"
              }
              onChange={handleChange}
              value={inputTemperature}
            />
            <label>
              {inputUnit === "fahrenheit" ? "Fahrenheit" : "Degree Celsius"}
            </label>
          </div>
          <div className="input-inside">
            <input
              placeholder={
                outputUnit === "fahrenheit" ? "Fahrenheit" : "Degree Celsius"
              }
              value={outputTemperature}
              readOnly
            />
            <label>
              {outputUnit === "fahrenheit" ? "Fahrenheit" : "Degree Celsius"}
            </label>
          </div>
        </div>
        <button onClick={switchUnits}>Switch Units</button>
      </div>
    </div>
  );
}

export default Temperature;
