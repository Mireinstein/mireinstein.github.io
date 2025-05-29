/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

import React from "react";

// CourseCard component
const CourseCard = ({ name, link, icon, inProgress }) => {
  return (
    <div className=" card bg-zinc-400 hover:bg-zinc-400/70 p-2 rounded-2xl shadow-lg mb-4 ring-1 ring-inset ring-zinc-50/10">
      <h3 className="text-xl font-bold flex items-center gap-2">
        {icon} {name}

        {inProgress && (
          <div className="relative w-2 h-2 rounded-full bg-emerald-400 ml-1">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
        )}
      </h3>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-sky-700/100 hover:text-blue-500 font-medium transition-colors"
      >
        Course Website →
      </a>
    </div>
  );
};

export default CourseCard;
