//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <section id="menu">
      <div className="menuContainer">
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/categories">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
