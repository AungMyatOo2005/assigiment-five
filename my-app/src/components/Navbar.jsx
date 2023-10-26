import React from "react";

function Navbar() {
    console.log(window.location)
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
      </nav>
    </div>
  );
}

export default Navbar;
