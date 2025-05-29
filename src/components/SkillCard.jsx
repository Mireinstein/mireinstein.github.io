/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Node modules
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, title, desc, link, classes }) => {
  return (
    <div
      className={`card bg-zinc-400
     hover:bg-zinc-400/70 active:bg-zinc-200/70 shadow-lg hover:shadow-xl flex items-center gap-2 ring-1 ring-zinc-50/10 ring-inset rounded-2xl p-2 hover:bg-zinc-400 transition-colors group  ${classes}`}
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-10 h-10 p-2 group-hover:bg-zinc-600 transition-colors">
        <a href={link}>
          <img src={imgSrc} width={30} height={30} alt={title} />
        </a>
      </figure>

      <div>
        <h3>{title}</h3>

        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
