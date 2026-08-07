import { motion } from "framer-motion"
import { education, experience } from "../data/experience"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const TimelineEntry = ({ entry }) => (
  <article className="timeline__entry">
    <div className="timeline__period">{entry.period}</div>
    <div className="timeline__content">
      <h3 className="timeline__title">
        {entry.title} <span className="timeline__org">· {entry.org}</span>
      </h3>
      {entry.location && <p className="timeline__location">{entry.location}</p>}
      {entry.bullets.length > 0 && (
        <ul className="timeline__bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {entry.tags.length > 0 && (
        <div className="timeline__tags">
          {entry.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      )}
    </div>
  </article>
)

const Experience = () => {
  return (
    <motion.section
      id="experience"
      variants={item}
      className="section"
      aria-label="Experience"
    >
      <p className="section__eyebrow">Experience</p>
      <div className="timeline">
        {experience.map((entry) => (
          <TimelineEntry key={`${entry.title}-${entry.org}-${entry.period}`} entry={entry} />
        ))}
      </div>

      <p className="section__eyebrow" style={{ marginTop: "1rem" }}>Education</p>
      <div className="timeline">
        {education.map((entry) => (
          <TimelineEntry key={`${entry.title}-${entry.org}-${entry.period}`} entry={entry} />
        ))}
      </div>
    </motion.section>
  )
}

export default Experience
