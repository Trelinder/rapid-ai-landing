import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav id="navbar">
      <NavLink to="/" id="nav-brand">
        RAPID AI CONSULTANTS
      </NavLink>
      <ul id="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" id="nav-cta">
            Get in Touch
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
