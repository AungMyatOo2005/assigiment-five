/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import "./usercard.css";
import img from "../images/people.jpg";
import { UserContext } from "./RegistrationContext";
function UserCard(props) {
  const {setData } = useContext(UserContext);
  const { name, email, phone, color } = props.value;
  const handleClick=()=>{
    setData(false)
  }
  return (
    <div className="card-container">
      <div className="color-box" style={{ background: `${color}` }}></div>
      <div className="img-box">
        <img src={img} style={{ border: `3px solid ${color}`}}></img>
      </div>
      <div className="info-box">
        <h3 className="name">{name}</h3>
        <div>
          <p className="email">
            <span>email:</span>
            {email}
          </p>
          <p className="phone">
            <span>Phone No:</span>
            {phone}
          </p>
        </div>
      </div>
      <button className="card-button" style={{ background: `${color}` }} onClick={handleClick}>
        Back Registration
      </button>
    </div>
  );
}

export default UserCard;
