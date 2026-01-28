import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import './Contact.css'

/**
 * Contact Section Component
 * Provides contact information and social media links
 */
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content fade-in-up">
          {/* Contact Message */}
          <div className="contact-message">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="contact-methods">
            {/* Email */}
            <a href="mailto:srikanth@example.com" className="contact-card email">
              <div className="icon">
                <FiMail />
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>srikanthsamudrala999@gmail.com</p>
              </div>
              <span className="arrow">→</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/srikanth-samudrala-28b933363" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card linkedin"
            >
              <div className="icon">
                <FiLinkedin />
              </div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p>srikanth-samudrala</p>
              </div>
              <span className="arrow">→</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/srikanthsamudrala444a" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card github"
            >
              <div className="icon">
                <FiGithub />
              </div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>srikanthsamudrala444a</p>
              </div>
              <span className="arrow">→</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919866579033" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card whatsapp"
            >
              <div className="icon">
                📱
              </div>
              <div className="contact-info">
                <h4>WhatsApp</h4>
                <p>+91 9866579033</p>
              </div>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Resume Download */}
          <div className="resume-section">
            <h3>Want to know more?</h3>
            <a href="/resume.pdf" download className="resume-btn">
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
