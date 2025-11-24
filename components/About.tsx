'use client';

import Image from 'next/image';

export default function About() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <p className="section-category">About Me</p>
          <h2 className="section-title">
            Aspiring UI/UX Designer & Developer <br /> 3<sup>rd</sup>-Year Polytechnic Student
          </h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-card__img">
                <Image src="/vaibhav.png" alt="Vaibhav Ingle" width={300} height={300} />
              </div>
              <div className="profile-card__cnt">
                <div className="profile-card__name">Vaibhav Ingle</div>
                <div className="profile-card__txt">Aspiring UI/UX Designer & Developer</div>
                <div className="profile-card-social">
                  <a href="https://github.com/vaibhavingle2007" target="_blank" rel="noopener noreferrer" className="profile-card-social__item github">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/ninjavex_" target="_blank" rel="noopener noreferrer" className="profile-card-social__item instagram">
                    <svg viewBox="0 0 64 64" fill="currentColor">
                      <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-details">
            <div className="about-text">
              <p>
                Hi! I'm a second-year polytechnic student with a strong passion for UI/UX design 
                and a growing interest in development and AI. I love creating clean, user-friendly 
                interfaces and exploring how design and code come together to create 
                meaningful digital experiences.
              </p>
              <p>
                Alongside design, I'm also learning programming — I'm comfortable with C, C++, 
                and Python, and currently exploring the basics of AI and machine learning. 
                Whether it's prototyping in Figma or writing code, I enjoy building projects that 
                challenge me and help me grow.
              </p>
              <p>
                Right now, I'm focused on improving my frontend skills and working on personal 
                projects that combine design thinking with technical execution.
              </p>
            </div>
            <div className="skills">
              <h3 className="skills-title">Skills & Expertise</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="resume-download">
              <a href="/resume.pdf" download="Vaibhav_Ingle_Resume.pdf" className="btn btn-secondary download-resume">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
