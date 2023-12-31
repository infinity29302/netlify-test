import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>{" "}
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>{" "}
    </div>
  );
}

export default Header;
