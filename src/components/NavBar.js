import React from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";

const NavBar = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;  

  return (
    <header>
      <nav>
      <NavLink className="selected" to="/">
        <div className="logo">
         <h3> Foodie <i className="fas fa-globe-europe"> </i>  Travel </h3> 
        </div>
      </NavLink>
    
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
    </header>
  );
};


export default NavBar;
