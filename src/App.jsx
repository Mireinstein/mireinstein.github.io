/**
 * Admire Madyira — personal portfolio
 */

import { motion } from "framer-motion"
import useTheme from "./hooks/useTheme"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Links from "./components/Links"
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
        <Links />
        <Connect />
      </motion.div>

      <footer className="landing-footer">
        <p>&#169; 2026 Admire Madyira</p>
      </footer>
    </div>
  )
}

export default App
