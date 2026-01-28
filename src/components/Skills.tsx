import './Skills.css'

/**
 * Skills Section Component
 * Displays technical skills organized by category
 */
function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "SQL", "Firebase"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={index} 
              className={`skill-category fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary fade-in-up">
          <h3>Proficiency Overview</h3>
          <div className="proficiency-bars">
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span className="skill-name">Frontend Development</span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span className="skill-name">Backend Development</span>
                <span className="skill-percent">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span className="skill-name">Full-Stack Applications</span>
                <span className="skill-percent">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-header">
                <span className="skill-name">Problem Solving</span>
                <span className="skill-percent">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
