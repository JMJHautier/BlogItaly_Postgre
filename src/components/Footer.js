import React from "react"; 
import {NavLink} from "react-router-dom"


const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
            <li><NavLink to="/">Privacy Policy</NavLink></li>
            <li><NavLink to="/">Social media</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Our team</NavLink></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
