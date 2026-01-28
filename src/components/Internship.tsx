import './Internship.css'

/**
 * Internship Experience Component
 * Displays professional internship experience with detailed achievements
 */
function Internship() {
  const internshipData = {
    title: "Angular Developer Intern",
    company: "GlacierSoft",
    period: "Contract Duration",
    description: "Developed enterprise-level web applications with a focus on scalability, performance, and user experience.",
    responsibilities: [
      "Developed and maintained Angular components, services, and modules for enterprise admin applications",
      "Built 'trans-web-admin' - a comprehensive admin dashboard with role-based access control",
      "Integrated RESTful APIs and implemented real-time data handling using RxJS",
      "Collaborated with backend teams to design and implement efficient data workflows",
      "Optimized application performance and improved load times by 40%",
      "Contributed to code reviews and maintained code quality standards"
    ],
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "REST APIs", "RxJS", "Git"]
  }

  return (
    <section id="internship" className="internship">
      <div className="container">
        <h2 className="section-title">Internship Experience</h2>
        
        <div className="internship-card fade-in-up">
          {/* Header */}
          <div className="internship-header">
            <div>
              <h3 className="position">{internshipData.title}</h3>
              <p className="company">{internshipData.company}</p>
              <p className="period">{internshipData.period}</p>
            </div>
          </div>

          {/* Description */}
          <p className="internship-description">
            {internshipData.description}
          </p>

          {/* Responsibilities */}
          <div className="responsibilities">
            <h4>Key Responsibilities & Achievements</h4>
            <ul className="responsibility-list">
              {internshipData.responsibilities.map((resp, idx) => (
                <li key={idx} className="responsibility-item">
                  <span className="checkmark">✓</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="internship-tech">
            <h4>Technologies & Tools</h4>
            <div className="tech-grid">
              {internshipData.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internship
