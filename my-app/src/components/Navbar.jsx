import React, { useContext } from "react";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import { UserContext } from "./RegistrationContext";

function Navbar() {
  const { toggle, setToggle,toggleResult } = useContext(UserContext);

  const toggleButtonClick = () => {
    setToggle(!toggle);
    localStorage.setItem("toggle", JSON.stringify(!toggleResult))
  };
  return (
    <div>
      <nav>
        <a href="/" className="site-name">
          Assigiment
        </a>
        <ul>
          <li>
            <a href="/todo">Todo</a>
          </li>
          <li>
            <a href="/registration">Registration</a>
          </li>
          <li>
            <a href="/temperature">Temperature</a>
          </li>
        </ul>
        <button onClick={toggleButtonClick}>
          <img src={toggleResult ? sun : moon} alt="Toggle" />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
