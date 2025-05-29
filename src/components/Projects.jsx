/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import ProjectCard from "./ProjectCard";

const works = [
  {
    title: "Intelligent Pacman bots",
    tags: ["Adversarial Search", "Reinforcement Learning", "Python"],
    link: "https://github.com/Mireinstein/AI",
    website: ""
  },
  {
    title: "Self-Driving Car",
    tags: ["Algorithms", "Python"],
    link: "https://www.youtube.com/watch?v=3A_FJNcRwYc",
    website: ""
  }
];

const Projects = ({theme}) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Highlight Projects</h2>

        <p className=" mt-3 mb-8 max-w-[50ch] reveal-up" >
          I particularly enjoyed building these.
        </p>

        <div className="grid gap-x-3 gap-y-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
          {works.map(({ title, tags, link, website }, key) => (
            <ProjectCard
              theme={theme}
              key={key}
              title={title}
              tags={tags}
              link={link}
              website={website}
              classes=" reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
