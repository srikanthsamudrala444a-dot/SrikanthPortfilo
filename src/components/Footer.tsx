import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

/**
 * Footer Component
 * Displays social links, copyright, and footer information
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">SS</div>
            <h3>Srikanth Samudrala</h3>
            <p>Software Engineer | Full Stack & Angular Developer</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:srikanthsamudrala999@gmail.com" title="Email" className="social-icon">
                <FiMail />
              </a>
              <a 
                href="https://www.linkedin.com/in/srikanth-samudrala-28b933363" 
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-icon"
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://github.com/srikanthsamudrala444a-dot" 
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-icon"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Srikanth Samudrala. All rights reserved.
          </p>
          <p className="footer-note">
            Designed & Built with <span className="heart">♥</span> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
