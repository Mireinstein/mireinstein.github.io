/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import SkillCard from "./SkillCard"

//skill items

const skillItems = [
  {
      imgSrc: "./images/python.png",
      title: "Python",
      desc: "AI and ML Development",
      link: "https://www.python.org/"
  },
  {
      imgSrc: "./images/java.svg",
      title: "Java",
      desc: " App Development",
      link: "https://www.java.com/en/"
  },
  {
      imgSrc: "./images/typescript.png",
      title: "TypeScript",
      desc: "Web Development",
      link: "https://www.typescriptlang.org/"
  },
  {
      imgSrc: "./images/nodejs.svg",
      title: "NodeJS",
      desc: "Backend development",
      link: "https://nodejs.org/en/"
  },
  {
      imgSrc: "./images/react.png",
      title: "React",
      desc: "Frontend Framework",
      link: "https://reactjs.org/"
  },
  {
      imgSrc: "./images/tailwind.png",
      title: "TailwindCSS",
      desc: "CSS Framework",
      link: "https://tailwindcss.com/"
  },
  {
      imgSrc: "./images/mysql.png",
      title: "MySQL",
      desc: "Database",
      link: "https://www.mysql.com/"
  },
  {
      imgSrc: "./images/azure.png",
      title: "Azure",
      desc: "Cloud Computing",
      link: "https://azure.microsoft.com/"
  }
]


const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          My Tech Stack
        </h2>
        <p className=" mt-3 mb-8 max-w-[50ch] reveal-up" >
          Some of the tools I am currently using.
        </p>

        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({imgSrc, title, desc, link}, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              link={link}
              classes = " reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

/*
Icons used in this project are licensed under Creative Commons. You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensors endorse you or your use.

- Python icon by Python Software Foundation, CC BY-SA 3.0
- Java icon by Oracle, CC BY-SA 3.0
- TypeScript icon by Microsoft, CC BY-SA 3.0
- Flutter icon by Google, CC BY-SA 3.0
- Solidity icon by Solidity Core Team, CC BY-SA 3.0
- NodeJS icon by OpenJS Foundation, CC BY-SA 3.0
- React icon by Facebook, CC BY-SA 3.0
- TailwindCSS icon by Tailwind Labs, CC BY-SA 3.0
- Bootstrap icon by Bootstrap, CC BY-SA 3.0
- MySQL icon by Oracle, CC BY-SA 3.0
- Azure icon by Microsoft, CC BY-SA 3.0
*/