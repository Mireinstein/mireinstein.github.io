/**
 *@copyright 2025 Aime Cesaire Mugishawayo
 *@license Apache-2.0
 */

import React from "react";
import CourseCard from "./CourseCard";

// Courses section
const Courses = () => {
  const courses = [
    {
      name: "Algorithms",
      link: "https://www.amherst.edu/academiclife/departments/courses/2223F/COSC/COSC-311-2223F",
      icon: "📊",
      inProgress: false,
    },
    {
      name: "Data structures",
      link: "https://www.amherst.edu/academiclife/departments/courses/2122F/COSC/COSC-211-2122F",
      icon: "🗂️",
      inProgress: false,
    },
    {
      name: "Natural Language Processing",
      link: "https://www.amherst.edu/academiclife/departments/courses/2425S/COSC/COSC-243-2425S",
      icon: "📝",
      inProgress: true,
    },
    {
      name: "Abstract Algebra",
      link: "https://www.amherst.edu/academiclife/departments/courses/2324F/MATH/MATH-350-2324F",
      icon: "🔢",
      inProgress: false,
    },
    {
      name: "Machine learning",
      link: "https://www.amherst.edu/academiclife/departments/courses/2223S/COSC/COSC-247-2223S",
      icon: "🤖",
      inProgress: false,
    },
    {
      name: "Computer Systems",
      link: "https://www.amherst.edu/academiclife/departments/courses/2122S/COSC/COSC-171-2122S",
      icon: "🖥️",
      inProgress: false,
    },
    {
      name: "Artificial Intelligence",
      link: "https://www.amherst.edu/academiclife/departments/courses/2324F/COSC/COSC-241-2324F",
      icon: "🧠",
      inProgress: false,
    },
    {
      name: "Number Theory",
      link: "https://www.amherst.edu/academiclife/departments/courses/2223S/MATH/MATH-250-2223S",
      icon: "🔣",
      inProgress: false,
    },
    {
      name: "Cryptography",
      link: "https://www.amherst.edu/academiclife/departments/courses/2223S/MATH/MATH-252-2223S",
      icon: "🔐",
      inProgress: false,
    },
    {
      name: "Nonlinear Optimization",
      link: "https://www.amherst.edu/academiclife/departments/courses/2425S/MATH/MATH-294-2425S",
      icon: "📈",
      inProgress: false,
    },
    {
      name: "Calculus I, II, III",
      link: "https://www.amherst.edu/academiclife/departments/courses/",
      icon: "📈",
      inProgress: false,
    }
  ];

  return (
    <section id="courses" className="section py-8 ">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-6xl ">
        <h2 className="headline-2 reveal-up">Technical Coursework</h2>
        <p className=" mt-3 mb-8 max-w-[50ch] reveal-up">
          My present and past coures.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              link={course.link}
              icon={course.icon}
              inProgress={course.inProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
