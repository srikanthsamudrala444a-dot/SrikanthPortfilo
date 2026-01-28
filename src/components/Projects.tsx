import './Projects.css'

/**
 * Projects Section Component
 * Showcases completed projects with detailed descriptions
 */
function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "SwiggyPayLater",
      year: "2025",
      description: "A payment-based web application that provides flexible payment options for users.",
      technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
      highlights: [
        "Implemented secure payment processing",
        "Designed REST APIs for transaction management",
        "Built responsive frontend with React",
        "Integrated payment gateway"
      ]
    },
    {
      id: 2,
      title: "Thin Dog",
      year: "2024",
      description: "A full-stack web application focused on performance optimization and modern UI design.",
      technologies: ["Angular", "Express.js", "SQL", "TypeScript"],
      highlights: [
        "Optimized application performance",
        "Implemented advanced caching strategies",
        "Designed clean and intuitive user interface",
        "Built scalable backend architecture"
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>

              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-dot"></span>
                    {highlight}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="project-action">
                <a href="#" className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
