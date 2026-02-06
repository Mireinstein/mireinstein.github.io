/**
 * @copyright 2025 Admire Madyira
 * @license Apache-2.0
 */

const experiences = [
  {
    company: "Microsoft",
    logo: "./images/microsoft-logo.svg",
    totalDuration: "2 yrs 10 mos",
    location: "Redmond, Washington",
    roles: [
      {
        title: "Software Engineer, Microsoft AI",
        type: "Full-time",
        start: "Aug 2025",
        end: "Present",
        desc: "Building and maintaining the release, update, and deployment infrastructure that reliably delivers Edge, Webview2 and Copilot to users worldwide.",
        skills: ["DevOps", "CI/CD", "Edge", "Copilot"]
      },
      {
        title: "Software Engineer Intern, Generative AI",
        type: "Internship",
        start: "Aug 2023",
        end: "Aug 2025",
        desc: "Copilot Reliability, Security, and Safety Research.",
        skills: ["Machine Learning", "AI", "Safety Research"]
      },
      {
        title: "Software Engineer + Product Manager, Search Optimization",
        type: "Internship",
        start: "May 2023",
        end: "Aug 2023",
        desc: "Search Optimization for the Edge Browser.",
        skills: ["C++", "TypeScript"]
      }
    ]
  },
  {
    company: "Columbia University",
    logo: "./images/columbia-logo.png",
    totalDuration: "3 mos",
    location: "New York, United States",
    roles: [
      {
        title: "AI/ML Engineer Intern",
        type: "Internship",
        start: "Jun 2022",
        end: "Aug 2022",
        desc: "Reinforcement Learning Research for Self-Driving Cars.",
        skills: ["Python", "Reinforcement Learning", "Research"]
      }
    ]
  },
  {
    company: "Google",
    logo: "./images/google-logo.svg",
    totalDuration: "10 mos",
    location: "Remote",
    roles: [
      {
        title: "Africa Developer",
        type: "Program",
        start: "Aug 2021",
        end: "May 2022",
        desc: "Mobile & Web development scholarship with a capstone project.",
        skills: ["Mobile Dev", "Web Dev"]
      }
    ]
  }
];

const volunteering = [
  {
    org: "AspireUSA Academy",
    role: "Founder",
    start: "Jun 2025",
    end: "Present",
    desc: "Providing free guidance on the college application and financial aid process to Zimbabwean underprivileged and first-generation low-income high school students."
  },
  {
    org: "StemEaze",
    role: "Founder & Tutor",
    start: "Apr 2020",
    end: "Jul 2021",
    desc: "Taught Java programming to 100+ high school students. Delivered remote STEM tutoring across multiple subjects during COVID-19 school closures for underprivileged students in rural Zimbabwe."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Experience</h2>
        <p className="mt-3 mb-10 max-w-[50ch] reveal-up">
          My professional journey across industry and academia.
        </p>

        <div className="space-y-10">
          {experiences.map((exp, expIdx) => (
            <div key={expIdx} className="reveal-up">
              {/* Company Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 p-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {exp.totalDuration} &middot; {exp.location}
                  </p>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="experience-timeline">
                {exp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="experience-role-card card p-4 rounded-2xl mb-3 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold">{role.title}</h4>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${role.type === 'Full-time' ? 'bg-emerald-400/20 text-emerald-600 dark:text-emerald-300' : 'bg-sky-400/20 text-sky-600 dark:text-sky-300'}`}>
                        {role.type}
                      </span>
                    </div>
                    <p className="text-sm text-sky-500 dark:text-sky-400 mt-0.5">
                      {role.start} &ndash; {role.end}
                    </p>
                    <p className="text-sm mt-2">{role.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {role.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 text-xs rounded-full bg-zinc-50/10 border border-zinc-500/30 dark:border-zinc-600/40">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Volunteering & Impact */}
        <div className="mt-14 reveal-up">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-rounded text-sky-500" style={{ fontSize: '22px' }}>
              volunteer_activism
            </span>
            <h3 className="text-xl font-bold">Volunteering &amp; Impact</h3>
          </div>

          <div className="space-y-4">
            {volunteering.map((vol, vIdx) => (
              <div key={vIdx} className="card p-4 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-semibold">{vol.org}</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-600 dark:text-emerald-300">
                    {vol.role}
                  </span>
                </div>
                <p className="text-sm text-sky-500 dark:text-sky-400 mt-0.5">
                  {vol.start} &ndash; {vol.end}
                </p>
                <p className="text-sm mt-2">{vol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
