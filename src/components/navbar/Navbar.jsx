import { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-mobil">
        <li>
          <Link to="/" className="title">
            <img src="./src/assets/images/logo.svg" alt="Logo" />
          </Link>
        </li>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="./src/assets/images/icon-menu.svg" alt="Logo" />
        </div>
      </div>

      <ul className={menuOpen ? "open" : "closed"}>
        <div className="menu_container">
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <img
            className="close-menu"
              src="./src/assets/images/icon-close-menu.svg"
              alt="Close Icon"
            />
          </div>

          <div className="links-container">
            <li>
              <NavLink to="/features">
                Features{" "}
                <img
                  src="./src/assets/images/icon-arrow-down.svg"
                  alt="Icon Arrow down"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/company">
                Company{" "}
                <img
                  src="./src/assets/images/icon-arrow-down.svg"
                  alt="Icon Arrow down"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </div>

          <div className="session-container">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink className="register" to="/register">
                Register
              </NavLink>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
