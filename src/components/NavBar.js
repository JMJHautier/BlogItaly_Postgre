import React from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;  

  return (
    <header>
      <NavLink className="selected" to="/">
        <div className="logo">
         <h3> Foodie <i class="fas fa-globe-europe"> </i>  Travel </h3> 
        </div>
      </NavLink>
      <nav>
        <ul> 
          <li className="item"> 
          <NavLink  className="selected" to={`/recipes/${randomNumber}`}>
              My recipes
            </NavLink>
          </li> 
          <li className="item">
            <NavLink className="selected" to="/spots">
              My spots
            </NavLink>
          </li>
          <li className="item">
            <NavLink className="selected" to="/contact-us">
              Contact us
            </NavLink>
          </li>
          <li className="item">
            <NavLink className="selected" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
};

export default NavBar;
