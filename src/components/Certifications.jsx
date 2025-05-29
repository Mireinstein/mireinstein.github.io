import React from 'react';
import CertificationCard from './CertificationCard';

// Certification items
const certificationItems = [
  {
      imgSrc: "./images/az-900.svg",
      title: "AI & ML Engineering",
      desc: "AI & ML Engineering",
      link: "https://www.coursera.org/professional-certificates/microsoft-ai-and-ml-engineering"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          My Certifications
        </h2>
        <p className="mt-3 mb-8 max-w-[50ch] reveal-up">
          My certifications journey.
        </p>

        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {certificationItems.map(({imgSrc, title, desc, link}, key) => (
            <CertificationCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              link={link}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;