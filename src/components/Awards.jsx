import { motion } from "framer-motion"
import { awards } from "../data/awards"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Awards = () => {
  return (
    <motion.section
      id="awards"
      variants={item}
      className="section"
      aria-label="Awards"
    >
      <p className="section__eyebrow">Awards</p>
      <div className="timeline">
        {awards.map((award) => (
          <article key={award.title} className="timeline__entry">
            <div className="timeline__period">{award.period}</div>
            <div className="timeline__content">
              <h3 className="timeline__title">
                {award.title} <span className="timeline__org">· {award.org}</span>
              </h3>
              <p className="timeline__location">{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Awards
