import { motion } from "framer-motion"
import { BuildingIcon, PinIcon, MailIcon, LinkIcon, LinkedInIcon } from "./icons"

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
          <ul className="hero-vcard">
            <li>
              <a href="https://github.com/microsoft" target="_blank" rel="noopener noreferrer">
                <BuildingIcon />
                @microsoft
              </a>
            </li>
            <li>
              <PinIcon />
              Redmond, WA
            </li>
            <li>
              <a href="mailto:admiretmadyira@gmail.com">
                <MailIcon />
                admiretmadyira@gmail.com
              </a>
            </li>
            <li>
              <a href="https://admiremadyira.com/" target="_blank" rel="noopener noreferrer">
                <LinkIcon />
                admiremadyira.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/admire-madyira/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                in/admire-madyira
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div variants={item} className="landing-hero__text">
          <p className="section__eyebrow">About</p>
          <p className="landing-bio">
            Software Engineer at Microsoft working on Build, Release, Update, and
            Deployment infrastructure for Copilot &amp; Microsoft Edge. Previously
            worked on search optimization and browser latency improvement using
            C++ for the Edge browser, and on applied ML research into Copilot
            safety and robustness to adversarial attacks such as prompt injection.
          </p>
          <p className="landing-bio">
            Outside of work, I care deeply about educational equity and have spent
            my time and skills trying to improve access to education in my
            communities.
          </p>
          <p className="landing-bio">I also love playing soccer.</p>
        </motion.div>
      </header>
    </>
  )
}

export default Hero
