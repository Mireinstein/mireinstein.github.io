import { motion } from "framer-motion"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Connect = () => {
  return (
    <motion.section
      id="connect"
      variants={item}
      className="section"
      aria-label="Connect"
    >
      <p className="section__eyebrow">Connect</p>
      <p className="landing-bio">
        Open to conversations about release engineering and infrastructure,
        applied machine learning, and low-latency/quantitative systems. Reach
        out any of these ways.
      </p>
      <div className="connect__row">
        <a href="mailto:admiretmadyira@gmail.com" className="landing-cta landing-cta--primary">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/admire-madyira/"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-cta landing-cta--secondary"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Mireinstein"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-cta landing-cta--secondary"
        >
          GitHub
        </a>
        <a href="#" className="landing-cta landing-cta--secondary" onClick={(e) => e.preventDefault()}>
          Resume
        </a>
      </div>
    </motion.section>
  )
}

export default Connect
