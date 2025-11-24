'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  key: string;
  title: string;
  description: string | React.ReactNode;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  image: string;
  tags: string[];
}

const projectData: Record<string, Project> = {
  'youtube-blog': {
    key: 'youtube-blog',
    title: 'YouTube to Blog Converter',
    description: (
      <div>
        <p>An AI-powered tool that converts YouTube videos into blog posts using machine learning for automated content creation.</p>
        <p>This project uses Python and AI to transcribe, analyze, and transform video content into well-structured blog articles with multiple template options.</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Video transcription and content extraction</li>
          <li>AI-powered blog generation with multiple templates</li>
          <li>Clean, responsive user interface</li>
          <li>Support for various blog formats (article, tutorial, review, summary)</li>
        </ul>
        <div className="project-modal-actions">
          <a href="https://github.com/vaibhavingle2007/YTBlogs" className="modal-btn" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://yt-blogs.vercel.app/" className="modal-btn modal-btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    ),
    technologies: ['AI', 'Python', 'Machine Learning', 'Natural Language Processing'],
    features: [
      'Video transcription and analysis',
      'AI-powered content generation',
      'SEO-optimized blog post creation',
      'Multiple output formats'
    ],
    github: 'https://github.com/vaibhavingle2007/YTBlogs',
    demo: 'https://yt-blogs.vercel.app/',
    image: '/assets/chat-bot.png',
    tags: ['AI', 'Python', 'Machine Learning']
  },
  'discover-india': {
    key: 'discover-india',
    title: 'DiscoverIndia360',
    description: (
      <div>
        <p>A sleek UI/UX focused web interface to help users discover incredible places across India, exploring hidden gems and presenting travel data visually.</p>
        <p>This project showcases India's diverse destinations with a modern, responsive design that highlights cultural landmarks, temples, and tourist attractions.</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Interactive destination discovery</li>
          <li>Visual travel galleries</li>
          <li>Travel journals and blogs</li>
          <li>Responsive design for all devices</li>
        </ul>
        <div className="project-modal-actions">
          <a href="https://github.com/vaibhavingle2007/Discoverindia360-sample-web.git" className="modal-btn" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://discoverindia360-sample-web.vercel.app/" className="modal-btn modal-btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    ),
    technologies: ['UI/UX', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Interactive map interface',
      'Location-based recommendations',
      'Visual data presentation',
      'Responsive design'
    ],
    github: 'https://github.com/vaibhavingle2007/Discoverindia360-sample-web.git',
    demo: 'https://discoverindia360-sample-web.vercel.app/',
    image: '/assets/discoverindia360.png',
    tags: ['UI/UX', 'Website', 'HTML', 'CSS']
  },
  'weather-app': {
    key: 'weather-app',
    title: 'WeatherApp',
    description: (
      <div>
        <p>A clean and responsive Java-based weather application with API integration to display real-time weather updates and forecasts.</p>
        <p>This project features a modern interface that provides users with accurate weather information, including current conditions, forecasts, and location-based data.</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Real-time weather data from reliable APIs</li>
          <li>5-day forecast with detailed information</li>
          <li>Location-based weather detection</li>
          <li>Clean and intuitive user interface</li>
        </ul>
        <div className="project-modal-actions">
          <a href="https://github.com/vaibhavingle2007/weather-app-Java.git" className="modal-btn" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>
    ),
    technologies: ['Java', 'API Integration', 'Weather API', 'UI Design'],
    features: [
      'Real-time weather data',
      '5-day forecast',
      'Location-based weather',
      'Clean user interface'
    ],
    github: 'https://github.com/vaibhavingle2007/weather-app-Java.git',
    image: '/assets/weather.png',
    tags: ['Java', 'API', 'Weather API']
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showProjectModal = (projectKey: string) => {
    setSelectedProject(projectData[projectKey]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <p className="section-category">SHOWCASE</p>
            <h2 className="section-title">SELECTED PROJECTS</h2>
            <p className="section-subtitle">A curated selection of my recent work, showcasing my design philosophy and development skills.</p>
          </div>
          
          <div className="projects-grid">
            {Object.values(projectData).map((project, index) => (
              <div key={project.key} className="project-card" data-project={project.key}>
                <div className="project-image">
                  <Image src={project.image} alt={project.title} className="project-img" width={600} height={400} />
                  <div className="project-overlay">
                    <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {typeof project.description === 'string' ? project.description : 
                      project.key === 'youtube-blog' ? 'An AI-powered tool that converts YouTube videos into blog posts using machine learning for music, automated content creation.' :
                      project.key === 'discover-india' ? 'A sleek UI/UX focused web interface to help users discover incredible places, exploring hidden gems and data visually.' :
                      'A clean and responsive Java-based weather application with API to display real-time weather updates and forecasts.'}
                  </p>
                  <div className="project-actions">
                    <button className="project-details-btn" onClick={() => showProjectModal(project.key)}>
                      Explore Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="project-button">
            <a href="https://github.com/vaibhavingle2007" className="project-link-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              VIEW ALL PROJECTS ON GITHUB
            </a>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal active" id="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
              </div>
              <div className="modal-body-content">
                {selectedProject.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
