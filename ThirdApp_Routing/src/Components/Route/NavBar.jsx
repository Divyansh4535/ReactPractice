import React from "react";
import { NavLink, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="flex justify-center mt-2 gap-40 bg-blue-100 text-lg font-bold">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "tomato" : "",
              fontWeight:e.isActive ? "bold": "",
              
            };
          }}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "tomato" : "",
              fontWeight:e.isActive ? "bold": "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "tomato" : "",
              fontWeight:e.isActive ? "bold": "",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "tomato" : "",
              fontWeight:e.isActive ? "bold": "",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
