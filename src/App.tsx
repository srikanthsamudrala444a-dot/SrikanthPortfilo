import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Main App Component
 * Root component that renders all sections of the portfolio website
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Internship />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
