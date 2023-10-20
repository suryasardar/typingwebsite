import React, { useState } from "react";
// import Logo from "./compoents/Logo";
import { NavLink } from "react-router-dom";

function Nav() {
  const [noo, setnoo] = useState(false);
  return (
    <>
      <div className="logo-container">
        <img src="/logo2.jpg" alt="Logo" className="logo-image" />
        <span className="logo-text">TYPING</span>
        <NavLink to="/">
          <button className="text-btn">Text</button>
        </NavLink>
        <NavLink to="ATOZ">
          <button className="atoz-btn">Alphabets</button>
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
