import React, { useEffect, useState } from "react";
import "./nav.css";
function Nav() {
  cosnt[(show, handleShow)] = useState("false");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
      }
    });
  });
  return (
    <div className="navbar">
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=45"
        alt="netflix logo"
      />
      <button className="nav__button">WELCOME</button>
    </div>
  );
}

export default Nav;
