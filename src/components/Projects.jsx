import { motion } from "framer-motion"
import { projects } from "../data/projects"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Projects = () => {
  return (
    <motion.section
      id="projects"
      variants={item}
      className="section"
      aria-label="Projects"
    >
      <p className="section__eyebrow">Projects</p>
      <div className="projects">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <div className="project__index">{String(i + 1).padStart(2, "0")}</div>
            <div className="project__body">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__desc">{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project__arrow" aria-hidden="true">&#8594;</div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
