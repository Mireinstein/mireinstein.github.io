/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

//Node modules
import PropTypes from "prop-types";

const ProjectCard = ({ theme, title, tags, link, website, classes }) => {
  return (
    <div
      className={
        `card relative p-5 rounded-3xl  bg-zinc-400
     hover:bg-zinc-400/70 active:bg-zinc-200/70 shadow-lg hover:shadow-xl 
     transition-all duration-300 ring-1 ring-inset ring-zinc-50/10 ` + classes
      }
    >

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>

          {website && (
            <p className="text-sm">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700/100 hover:text-blue-500 font-medium transition-colors"
              >
                Published →
              </a>
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {tags.map((label, key) => (
              <span
                key={key}
                className="px-3 py-1 text-sm bg-zinc-50/5 rounded-full border border-zinc-600"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-full w-10 h-10 grid place-items-center text-zinc-950 shrink-0 hover:bg-black">
          <span aria-hidden="true">
            <img src= {theme === "dark" ? "./images/github-mark-white.png" : "./images/github-mark.png"} alt="" />
            <a href={link} target="_blank" className="absolute inset-0"></a>
          </span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  website: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
