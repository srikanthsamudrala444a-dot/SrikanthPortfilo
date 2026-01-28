import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

/**
 * Navbar Component
 * Sticky navigation bar with smooth scrolling to sections
 * Mobile-responsive with hamburger menu
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">SS</span>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="internship"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
