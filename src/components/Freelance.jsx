/**
 * @copyright 2025 Admire Madyira
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const services = [
  {
    icon: "web",
    title: "Web & App Development",
    desc: "Full-stack web applications, landing pages, and interactive dashboards built with modern frameworks and best practices.",
    tags: ["React", "Node.js", "TypeScript", "APIs"]
  },
  {
    icon: "psychology",
    title: "AI & ML Solutions",
    desc: "Custom machine learning models, NLP pipelines, and intelligent applications powered by cutting-edge research and frameworks.",
    tags: ["Python", "ML", "NLP", "Research"]
  },
  {
    icon: "bar_chart",
    title: "Data Analysis",
    desc: "Data wrangling, visualization dashboards, and actionable insights extracted from raw datasets to drive informed decisions.",
    tags: ["Python", "SQL", "Pandas", "Visualization"]
  },
  {
    icon: "automation",
    title: "Task Automation",
    desc: "Automating repetitive workflows with custom scripts, bots, and integrations — saving time and eliminating human error.",
    tags: ["Python", "APIs", "CI/CD", "DevOps"]
  }
];

const whyHireMe = [
  {
    icon: "work",
    title: "Industry Experience",
    points: [
      "Software Engineer at Microsoft — Edge, Copilot infrastructure",
      "Interned at Microsoft, Google, and Columbia University",
      "Hands-on with production-scale systems and DevOps"
    ]
  },
  {
    icon: "school",
    title: "Academic Excellence",
    points: [
      "3.85 GPA — Dual CS & Math major, Amherst College",
      "Rhodes Scholarship Finalist",
      "Presidential & National Scholarship (Zimbabwe)"
    ]
  },
  {
    icon: "lightbulb",
    title: "Proven Impact",
    points: [
      "Founded programs reaching 100+ students globally",
      "10+ projects spanning AI, web, and systems",
      "Strong problem-solving across research and engineering"
    ]
  }
];

const steps = [
  {
    number: "01",
    title: "Discuss",
    desc: "We talk through your vision, goals, and requirements to align on the right approach."
  },
  {
    number: "02",
    title: "Build",
    desc: "I design and develop a tailored solution, keeping you updated at every milestone."
  },
  {
    number: "03",
    title: "Deliver",
    desc: "Clean handoff with documentation, feedback loop, and support as needed."
  }
];

const Freelance = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16">
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center">
            <span className="award-chip inline-block mb-4">
              <span className="material-symbols-rounded" style={{ fontSize: '14px' }}>verified</span>
              Available for Freelance
            </span>

            <h2 className="headline-1 max-w-[25ch] mx-auto mb-6">
              Let&apos;s Build Something Great Together
            </h2>

            <p className="text-base md:text-lg max-w-[55ch] mx-auto mb-8">
              From AI-powered solutions to polished web apps, I bring industry-grade engineering discipline to every project — big or small.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <ButtonPrimary
                label="Get in Touch"
                icon="mail"
                href="https://www.linkedin.com/in/admire-madyira/"
                target="_blank"
              />
              <ButtonPrimary
                label="View Resume"
                icon="description"
                href="/other/resume.pdf"
                download="Admire Madyira Resume.pdf"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="headline-2 reveal-up">Services I Offer</h2>
          <p className="mt-3 mb-8 max-w-[50ch] reveal-up">
            Tailored solutions built around your needs and timelines.
          </p>

          <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {services.map((service, idx) => (
              <div key={idx} className="card freelance-service-card p-6 rounded-2xl reveal-up">
                <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-4">
                  <span className="material-symbols-rounded text-sky-500" style={{ fontSize: '24px' }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-xs rounded-full bg-zinc-50/10 border border-zinc-500/30 dark:border-zinc-600/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="section">
        <div className="container">
          <h2 className="headline-2 reveal-up">Why Hire Me</h2>
          <p className="mt-3 mb-8 max-w-[50ch] reveal-up">
            A track record that speaks for itself.
          </p>

          <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {whyHireMe.map((item, idx) => (
              <div key={idx} className="card p-6 rounded-2xl reveal-up">
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-4">
                  <span className="material-symbols-rounded text-sky-500" style={{ fontSize: '20px' }}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-sm">
                      <span className="material-symbols-rounded text-sky-500 shrink-0" style={{ fontSize: '16px', marginTop: '2px' }}>
                        check_circle
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="headline-2 reveal-up text-center mx-auto">How We Work Together</h2>
          <p className="mt-3 mb-10 max-w-[50ch] reveal-up text-center mx-auto">
            A simple, transparent process from idea to delivery.
          </p>

          <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center reveal-up">
                <div className="w-14 h-14 rounded-2xl bg-sky-400 text-zinc-950 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-sky-400/30">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pb-24">
        <div className="container">
          <div className="card rounded-3xl p-8 md:p-12 text-center reveal-up">
            <h2 className="headline-2 mx-auto">Ready to Start?</h2>
            <p className="mt-3 mb-8 max-w-[50ch] mx-auto">
              Let&apos;s discuss your project and bring your vision to life.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <ButtonPrimary
                label="Get in Touch"
                icon="mail"
                href="https://www.linkedin.com/in/admire-madyira/"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Freelance;
