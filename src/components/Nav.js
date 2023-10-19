import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="header">
        <div className="nav-list">
          <NavLink to="/">
            <button className="text-btn">Text</button>
          </NavLink>
          <NavLink to="ATOZ">
            <button className="atoz-btn">Alphabets</button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
