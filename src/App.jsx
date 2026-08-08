/**
 * Admire Madyira — personal portfolio
 */

import { motion } from "framer-motion"
import useTheme from "./hooks/useTheme"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Awards from "./components/Awards"
import Volunteering from "./components/Volunteering"
import Connect from "./components/Connect"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const App = () => {
  const { theme, toggle } = useTheme()

  return (
    <div className="landing-shell">
      <Nav theme={theme} toggle={toggle} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="landing-main"
      >
        <Hero />
        <Experience />
        <Projects />
        <Awards />
        <Volunteering />
        <Connect />
      </motion.div>

      <footer className="landing-footer">
        <p>&#169; 2026 Admire Madyira</p>
        <div className="landing-footer__links">
          <a href="https://github.com/Mireinstein" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/admire-madyira/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </footer>
    </div>
  )
}

export default App
