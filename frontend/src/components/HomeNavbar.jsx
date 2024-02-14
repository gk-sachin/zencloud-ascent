import { useState,useEffect, useContext, } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "../assets/images/hamburger.png";
import Icons from "../assets/images/man.png";
import "../assets/css/HomeNavbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/UserContext";


function HomeNavbar() {
  const {user} = useContext(UserContext)

const [data,setData] = useState();
  useEffect(() => {
   setData(JSON.parse(localStorage.getItem("user")));
    
  }, []);

  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(prevState => !prevState);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(prevState => !prevState);
  };

  return (
    <nav className={`home-navbar ${location.pathname === "/" ? "transparent-bg" : ""}`}>
      <div className="container">
        <div className="logo">
          <h2 style={{ color: "White" }}>ZenCloud Ascent</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img className="ham" src={Hamburger} alt="Menu Icon" />
        </div>
        <div className={`nav-elementss ${showNavbar ? "active" : ""}`}>
          <ul className="lie">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/admission">Admission</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {data !==null ? <li>{user && user.role == "ADMIN" ? <NavLink to="/dashboard/admin">Dashboard</NavLink> : <NavLink to="/dashboard/user">Dashboard</NavLink>}</li> : <></>}
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
            alt="User Icon"
            onClick={handleDropdownToggle}
          />

          <div id="userDropdown" className={`dropdown-content ${showDropdown ? "show" : ""}`}>
            <div className="dropdown-list" aria-labelledby="avatarButton"></div>
            <div className="py-1">
              {data !== null ? (
                <>
                  <Link onClick={()=>{localStorage.clear()

                  window.location.reload()}} className="dropdown-item text-gray-700 hover:bg-gray-100">Sign out</Link>
                </>
              ) : (
                <Link to={"/login"} className="dropdown-item text-gray-700 hover:bg-gray-100">Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default HomeNavbar;
