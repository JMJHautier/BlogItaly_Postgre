import React from "react"
import {NavLink} from "react-router-dom"
import "./../App.css"
import logo from "./../assets/img/logo.jpg"
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <header>
      <NavLink className="selected" to="/">
        <div>
          <img className="logo" src={logo} alt="homepage" />
        </div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink className="selected" to="/recipes">
              My recipes
            </NavLink>
          </li>
          <li>
            <NavLink className="selected" to="spots">
              My spots
            </NavLink>
          </li>
          <li>
            <NavLink className="selected" to="contact-us">
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink className="selected" to="login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <SearchBar /> 
    </header>
  )
}

export default NavBar
