/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import { UserContext } from "./RegistrationContext";
import menu from "../images/menu.png";
import close from "../images/close.png";
function Navbar() {
  const { toggle, setToggle, setPageName ,isMenu,setIsMenu} = useContext(UserContext);

  const toggleButtonClick = () => {
    const newToggleState = !toggle;
    setToggle(newToggleState);
  };
  const setPage = (newPageName) => {
    setPageName(newPageName);
  };
  const setPageSecond = (newPageName) => {
    setPageName(newPageName);
    const toggleMenu = document.querySelector(".toggle-menu");
    toggleMenu.classList.remove("open")
    setIsMenu(!isMenu);
  };
  const menuClick=()=>{
    const toggleMenu=document.querySelector(".toggle-menu");
    toggleMenu.classList.toggle("open")
    setIsMenu(!isMenu)
  }
  return (
    <div>
      <nav>
        <p className="site-name">Assignment</p>
        <ul className="first-ul">
          <li onClick={() => setPage("todoPage")}>Todo</li>
          <li onClick={() => setPage("registrationPage")}>Registration</li>
          <li onClick={() => setPage("temperaturePage")}>Temperature</li>
        </ul>
        <div className="nav-btns">
          <button onClick={toggleButtonClick}>
            <img src={toggle ? sun : moon} alt="Toggle" />
          </button>
          <button className="menu" onClick={menuClick}>
            <img src={isMenu ? close : menu} />
          </button>
        </div>
        <div
          className="toggle-menu"
          style={{
            backgroundColor: !toggle
              ? "rgba(245, 245, 245, 0.767)"
              : "#575757a6",
          }}
        >
          <ul className="second-ul">
            <li onClick={() => setPageSecond("todoPage")}>Todo</li>
            <li onClick={() => setPageSecond("registrationPage")}>
              Registration
            </li>
            <li onClick={() => setPageSecond("temperaturePage")}>
              Temperature
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
