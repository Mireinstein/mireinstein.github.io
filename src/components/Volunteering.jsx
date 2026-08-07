import { motion } from "framer-motion"
import { volunteering } from "../data/volunteering"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Volunteering = () => {
  return (
    <motion.section
      id="volunteering"
      variants={item}
      className="section"
      aria-label="Volunteering"
    >
      <p className="section__eyebrow">Volunteering</p>
      <div className="timeline">
        {volunteering.map((entry) => (
          <article key={`${entry.title}-${entry.org}-${entry.period}`} className="timeline__entry">
            <div className="timeline__period">{entry.period}</div>
            <div className="timeline__content">
              <h3 className="timeline__title">
                {entry.title} <span className="timeline__org">· {entry.org}</span>
              </h3>
              <ul className="timeline__bullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Volunteering
