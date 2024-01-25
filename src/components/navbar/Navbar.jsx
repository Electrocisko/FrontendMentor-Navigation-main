import './navbar.css'
import {NavLink}from 'react-router-dom'

function Navbar() {
  return (
  <nav className="nav">
    <ul>
    <li>
        <NavLink to="/"><img src="./src/assets/images/logo.svg" alt="" /></NavLink>
      </li>
      <li>
        <NavLink to="/features">Features <img src="./src/assets/images/icon-arrow-down.svg" alt="Icon Arrow down" /></NavLink>
      </li>
      <li>
        <NavLink to="/company">Company <img src="./src/assets/images/icon-arrow-down.svg" alt="Icon Arrow down" /></NavLink>
      </li>
      <li>
        <NavLink to="/careers">Careers</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <div className="session">
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li >
        <NavLink className="register" to="/register">Register</NavLink>
      </li>
      </div>

    </ul>
  </nav>
  )
}

export default Navbar


  



  
  