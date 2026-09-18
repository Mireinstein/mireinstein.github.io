import { motion } from "framer-motion"
import { links } from "../data/links"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Links = () => {
  return (
    <motion.section
      id="elsewhere"
      variants={item}
      className="section"
      aria-label="Elsewhere"
    >
      <div className="linkrows">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linkrow"
          >
            <span className="linkrow__label">{link.label}</span>
            <span className="linkrow__source">{link.source}</span>
            <span className="linkrow__arrow" aria-hidden="true">&#8594;</span>
          </a>
        ))}
      </div>
    </motion.section>
  )
}

export default Links
