// Enhanced Portfolio JavaScript

// Loading Screen
function showLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1500);
    }
}

// Navigation Scroll Effect
function handleNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show nav when scrolling up or at top
        if (scrollTop <= 50) {
            nav.classList.remove('visible');
        } else {
            nav.classList.add('visible');
        }
        
        lastScrollTop = scrollTop;
    });
}

// 3D Card Tilt Effect
function add3DCardEffect() {
    document.querySelectorAll('.project-card, .profile-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Project Modal System
function createProjectModals() {
    const projectData = {
        'youtube-blog': {
            title: 'YouTube to Blog Converter',
            description: `
                <p>An AI-powered tool that converts YouTube videos into blog posts using machine learning for automated content creation.</p>
                <p>This project uses Python and AI to transcribe, analyze, and transform video content into well-structured blog articles with multiple template options.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Video transcription and content extraction</li>
                    <li>AI-powered blog generation with multiple templates</li>
                    <li>Clean, responsive user interface</li>
                    <li>Support for various blog formats (article, tutorial, review, summary)</li>
                </ul>
                <div class="project-modal-actions">
                    <a href="https://github.com/vaibhavingle2007/youtube-blog-converter" class="modal-btn" target="_blank">View Code</a>
                    <a href="https://yt-blogs.vercel.app/" class="modal-btn modal-btn-primary" target="_blank">Visit Website</a>
                </div>
            `,
            technologies: ['AI', 'Python', 'Machine Learning', 'Natural Language Processing'],
            features: [
                'Video transcription and analysis',
                'AI-powered content generation',
                'SEO-optimized blog post creation',
                'Multiple output formats'
            ],
            github: 'https://github.com/vaibhavingle2007/youtube-blog-converter',
            demo: 'https://yt-blogs.vercel.app/'
        },
        'discover-india': {
            title: 'DiscoverIndia360',
            description: `
                <p>A sleek UI/UX focused web interface to help users discover incredible places across India, exploring hidden gems and presenting travel data visually.</p>
                <p>This project showcases India's diverse destinations with a modern, responsive design that highlights cultural landmarks, temples, and tourist attractions.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Interactive destination discovery</li>
                    <li>Visual travel galleries</li>
                    <li>Travel journals and blogs</li>
                    <li>Responsive design for all devices</li>
                </ul>
                <div class="project-modal-actions">
                    <a href="https://github.com/vaibhavingle2007/Discoverindia360-sample-web.git" class="modal-btn" target="_blank">View Code</a>
                    <a href="https://discoverindia360-sample-web.vercel.app/" class="modal-btn modal-btn-primary" target="_blank">Visit Website</a>
                </div>
            `,
            technologies: ['UI/UX', 'HTML', 'CSS', 'JavaScript'],
            features: [
                'Interactive map interface',
                'Location-based recommendations',
                'Visual data presentation',
                'Responsive design'
            ],
            github: 'https://github.com/vaibhavingle2007/Discoverindia360-sample-web.git',
            demo: 'https://discoverindia360-sample-web.vercel.app/'
        },
        'weather-app': {
            title: 'WeatherApp',
            description: `
                <p>A clean and responsive Java-based weather application with API integration to display real-time weather updates and forecasts.</p>
                <p>This project features a modern interface that provides users with accurate weather information, including current conditions, forecasts, and location-based data.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Real-time weather data from reliable APIs</li>
                    <li>5-day forecast with detailed information</li>
                    <li>Location-based weather detection</li>
                    <li>Clean and intuitive user interface</li>
                </ul>
                <div class="project-modal-actions">
                    <a href="https://github.com/vaibhavingle2007/weather-app-Java.git" class="modal-btn" target="_blank">View Code</a>
                </div>
            `,
            technologies: ['Java', 'API Integration', 'Weather API', 'UI Design'],
            features: [
                'Real-time weather data',
                '5-day forecast',
                'Location-based weather',
                'Clean user interface'
            ],
            github: 'https://github.com/vaibhavingle2007/weather-app-Java.git',
            demo: '#'
        }
    };

    // Add click handlers to project detail buttons
    document.querySelectorAll('.project-details-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const projectCard = btn.closest('.project-card');
            const projectKey = projectCard.dataset.project;
            const project = projectData[projectKey];
            
            if (project) {
                showProjectModal(project);
            }
        });
    });

    // Close modal functionality
    const modal = document.getElementById('project-modal');
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function showProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    // Check if this is a project with HTML content
    if (project.title === 'YouTube to Blog Converter' || 
        project.title === 'DiscoverIndia360' || 
        project.title === 'WeatherApp') {
        // Use the HTML content directly
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
            </div>
            <div class="modal-body-content">
                ${project.description}
            </div>
        `;
    } else {
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
            </div>
            <div class="modal-body-content">
                <p class="modal-description">${project.description}</p>
                
                <div class="modal-section">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>${feature}</span>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="modal-footer">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                </a>
                ${project.demo && project.demo !== '#' ? `
                <a href="${project.demo}" target="_blank" class="btn btn-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                </a>` : ''}
            </div>
        `;
    }
    
    modal.classList.add('active');
}

// Animated Counter for Skills
function animateCounters() {
    const counters = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progressBar = skillItem.querySelector('.skill-progress');
                
                // Animate progress bar
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 100);
                
                observer.unobserve(skillItem);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Enhanced Scroll Animations
function enhanceScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add floating animation to certain elements
                if (entry.target.classList.contains('project-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('floating');
                    }, 800);
                }
                
                // Add glow effect to skills
                if (entry.target.classList.contains('skill-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('glow');
                    }, 1000);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.project-card, .skill-item, .contact-item, .about-content > *, .section-header'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
            navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .project-card, .skill-item, .about-content, .hero-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

animateOnScroll();

// Animate skill cards when they come into view
function animateSkillCards() {
    const skillsSection = document.querySelector('.skills-grid');
    
    if (!skillsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.skill-card');
                cards.forEach((card, index) => {
                    // Reset animation
                    card.style.animation = 'none';
                    card.offsetHeight; // Trigger reflow
                    card.style.animation = `fadeInScale 0.6s ease forwards ${index * 0.1}s`;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(skillsSection);
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    showLoadingScreen();
    handleNavScroll();
    
    setTimeout(() => {
        add3DCardEffect();
        createProjectModals();
        animateCounters();
        enhanceScrollAnimations();
        animateOnScroll();
        animateSkillCards();
    }, 1500);
});
