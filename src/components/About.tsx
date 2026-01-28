import './About.css'

/**
 * About Section Component
 * Displays personal introduction and key interests
 */
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          {/* Main About Text */}
          <div className="about-text fade-in-up">
            <p className="about-intro">
              I am a Computer Science engineer with a strong interest in web development and backend API design.
              I enjoy building scalable, clean, and user-friendly applications using modern technologies.
            </p>

            {/* Key Interests */}
            <div className="interests">
              <div className="interest-item">
                <h3>Web Development</h3>
                <p>Creating responsive and interactive web applications with React, Angular, and TypeScript.</p>
              </div>
              <div className="interest-item">
                <h3>Backend Design</h3>
                <p>Building robust APIs and scalable server-side applications with Node.js and Express.js.</p>
              </div>
              <div className="interest-item">
                <h3>Clean Code</h3>
                <p>Writing maintainable, well-documented code that follows industry best practices.</p>
              </div>
              <div className="interest-item">
                <h3>User Experience</h3>
                <p>Designing intuitive interfaces that provide exceptional user experiences.</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="stats">
              <div className="stat-card">
                <h4 className="stat-number">2+</h4>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <h4 className="stat-number">5+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h4 className="stat-number">10+</h4>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
