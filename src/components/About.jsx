/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 * 
 */


// Text
const welcome_paragraph = `Hi, I’m Admire — a dedicated problem solver with a deep fascination
                        for how systems are built, optimized, and pushed to their limits and used for good.
                        I’m a full-stack developer with experience that spans artificial intelligence, machine learning,
                        web development. My background also extends into browser architecture and Large Language Models . Whether I'm developing algorithms, building AI and ML models,
                        creating data-driven applications, I’m motivated by the drive to learn, build, and innovate and make an impact`

const aboutItems = [
    {
        label: "Projects",
        number: 10
    },
    {
        label:"Coding Languages",
        number: 6
    },
    {
        label: "Years in tech",
        number: "5",
    }
    
]

const About = () => {
  return (
   <section id="about" className="section">

        <div className="container">
            <div className="p-7 rounded-2xl md:p-12 reveal-up">

                <p className="mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up">
                    {welcome_paragraph}

                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-600 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-900">{label}</p>
                            </div>
                        ))
                    }

                </div>

            </div>

            
        </div>
   </section>

  )
}

export default About