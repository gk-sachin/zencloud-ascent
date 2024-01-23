
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import   Hamburger  from '../assets/images/hamburger.png'
// import { ReactComponent as Brand } from '../assets/images/logo.jpg'
import '../assets/css/Navbar.css'
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
      <div className="container">
        <div className="logo">
            <h4 style={{color : "black"}}>ZenCloud Ascent</h4>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img className = "ham" src={Hamburger} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
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
      </div>
    </nav>
    )
}
export default Navbar