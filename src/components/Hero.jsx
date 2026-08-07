import { motion } from "framer-motion"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Hero = () => {
  return (
    <>
      <header id="home" className="landing-hero">
        <motion.div variants={item} className="landing-hero__photo-wrap">
          <img
            src="/photo.jpg"
            alt="Admire Madyira"
            className="landing-hero__photo"
          />
        </motion.div>
        <motion.div variants={item} className="landing-hero__text">
          <p className="landing-kicker">Redmond, Washington</p>
          <h1 className="landing-name">
            Admire<br />Madyira
          </h1>
          <p className="landing-bio">
            Software Engineer at Microsoft working on Build, Release, Update, and
            Deployment infrastructure for Copilot &amp; Microsoft Edge. Previously
            worked on search optimization and browser latency improvement using
            C++ for the Edge browser, and on applied ML research into Copilot
            safety and robustness to adversarial attacks such as prompt injection.
          </p>
        </motion.div>
      </header>

      <motion.div variants={item} className="landing-actions">
        <a href="#projects" className="landing-cta landing-cta--primary">
          Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-cta landing-cta--secondary"
        >
          Resume
        </a>
      </motion.div>

      <motion.div variants={item} className="landing-social">
        <a
          href="https://github.com/Mireinstein"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-social__link"
        >
          GitHub
        </a>
        <span className="landing-social__sep" aria-hidden="true">&middot;</span>
        <a
          href="https://www.linkedin.com/in/admire-madyira/"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-social__link"
        >
          LinkedIn
        </a>
      </motion.div>
    </>
  )
}

export default Hero
