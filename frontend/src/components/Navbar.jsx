import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "../assets/images/hamburger.png";
import "../assets/css/Dropdown.css";
import Icons from "../assets/images/man.png";


import "../assets/css/Navbar.css";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h4 to style={{ color: "black" }}>
            ZenCloud Ascent
          </h4>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img className="ham" src={Hamburger} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admission">Admission</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="relative">
          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="im"
            src={Icons}
            alt="User dropdown"
            onClick={handleDropdownToggle}
          />

          <div
            id="userDropdown"
            className={`dropdown-content ${showDropdown && "show"}`}
          >
            <div className="dropdown-header">
              <div>Sachin</div>
              <div className="font-medium truncate">sachin@zencloud.com</div>
            </div>
            <div className="dropdown-list" aria-labelledby="avatarButton">
              
            </div>
            <div className="py-1">
            <Link to={"/dashboard"} className="dropdown-item text-gray-700 hover:bg-gray-100">
                Dashboard
              </Link>
              <Link to={"/login"}
                className="dropdown-item text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
