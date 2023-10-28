import React, { useContext } from "react";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import { UserContext } from "./RegistrationContext";

function Navbar() {
  const { toggle, setToggle, toggleResult, pageName, setPageName } =
    useContext(UserContext);

  const toggleButtonClick = () => {
    const newToggleState = !toggle;
    setToggle(newToggleState);
    localStorage.setItem("toggle", JSON.stringify(!toggleResult));
  };
console.log(pageName)
  const setPage = (newPageName) => {
    setPageName(
      newPageName
    );
  };

  return (
    <div>
      <nav>
        <p className="site-name">Assignment</p>
        <ul>
          <li onClick={() => setPage("todoPage")}>Todo</li>
          <li onClick={() => setPage("registrationPage")}>Registration</li>
          <li onClick={() => setPage("temperaturePage")}>Temperature</li>
        </ul>
        <button onClick={toggleButtonClick}>
          <img src={toggleResult ? sun : moon} alt="Toggle" />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
