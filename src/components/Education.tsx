import './Education.css'

/**
 * Education Section Component
 * Displays educational background with timeline
 */
function Education() {
  const educationData = [
    {
      id: 1,
      degree: "M.Tech in Computer Science and Engineering",
      institution: "Anurag University",
      period: "2024–2026",
      cgpa: "7.8",
      description: "Advanced studies in computer science with focus on software engineering and modern technologies."
    },
    {
      id: 2,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Anurag University",
      period: "2020–2024",
      cgpa: "8.23",
      description: "Strong foundation in computer science fundamentals, data structures, algorithms, and database design."
    },
    {
      id: 3,
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      period: "2018–2020",
      percentage: "94.6%",
      description: "Mathematics, Physics, and Chemistry specialization preparing for technical education."
    },
    {
      id: 4,
      degree: "Secondary Education (SSC)",
      institution: "Ekashila High School",
      period: "2018",
      cgpa: "9.2",
      description: "General education with strong academic foundation."
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`timeline-item fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="period">{edu.period}</p>
                {edu.cgpa && <p className="score"><strong>CGPA:</strong> {edu.cgpa}</p>}
                {edu.percentage && <p className="score"><strong>Percentage:</strong> {edu.percentage}</p>}
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
