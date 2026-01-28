import { FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-scroll'
import './Hero.css'

/**
 * Hero Section Component
 * Landing section with animated greeting and call-to-action
 */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        {/* SS Badge - Top Right */}
        <div className="ss-badge">
          <span className="badge-text">SS</span>
        </div>

        <div className="hero-content">
          {/* Main Greeting */}
          <div className="hero-text fade-in-up">
            <div className="greeting">Hi, I'm</div>
            <h1 className="hero-title">Srikanth Samudrala</h1>
            <p className="hero-subtitle">
              Software Engineer | Full Stack Developer | Fresher
            </p>
            <p className="hero-description">
              Building scalable, clean, and user-friendly applications with modern technologies.
              I specialize in web development, API design, and creating exceptional user experiences.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="hero-buttons">
              <Link to="projects" smooth={true} duration={500}>
                <button className="btn btn-primary">View My Work</button>
              </Link>
              <a href="/resume.pdf" download className="btn btn-secondary">
                Download Resume
              </a>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="scroll-indicator">
            <Link to="about" smooth={true} duration={500}>
              <FiArrowDown />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
