




// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

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
        nav.style.background = 'linear-gradient(135deg, rgba(15, 15, 35, 0.98) 0%, rgba(22, 33, 62, 0.98) 50%, rgba(15, 15, 35, 0.98) 100%)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 15, 35, 0.95) 100%)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Contact form now handled by Formspree service
// Form will redirect to a thank you page after submission

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add multiple animation classes based on element type
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                entry.target.classList.add('floating-element');
            } else if (entry.target.classList.contains('skill-item')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                setTimeout(() => {
                    entry.target.classList.add('glow-effect');
                }, 600);
            } else {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.project-card, .skill-item, .contact-item, .about-content > *'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Parallax scrolling effects - DISABLED to fix layout issues
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.parallax-element');

//     parallaxElements.forEach((element, index) => {
//         const speed = 0.5 + (index * 0.1);
//         const yPos = -(scrolled * speed);
//         element.style.transform = `translateY(${yPos}px)`;
//     });

//     // Hero parallax effect
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         const heroOffset = scrolled * 0.5;
//         hero.style.transform = `translateY(${heroOffset}px)`;
//     }

//     // Section parallax effects
//     const sections = document.querySelectorAll('.about, .projects, .contact');
//     sections.forEach((section, index) => {
//         const rect = section.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

//         if (isVisible) {
//             const sectionScrolled = window.pageYOffset - section.offsetTop + window.innerHeight;
//             const parallaxSpeed = 0.3 + (index * 0.1);
//             const yOffset = sectionScrolled * parallaxSpeed;
//             section.style.transform = `translateY(${yOffset * 0.1}px)`;
//         }
//     });
// });

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                const tagEnd = text.indexOf('>', i);
                element.innerHTML += text.substring(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleText = heroTitle.innerHTML;
        typeWriter(heroTitle, titleText, 80);
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

// Add ripple CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Advanced parallax controller - DISABLED to fix layout issues
// class ParallaxController {
//     constructor() {
//         this.elements = [];
//         this.rafId = null;
//         this.init();
//     }

//     init() {
//         // Add parallax elements
//         this.addElement('.hero-content', 0.1);
//         this.addElement('.hero-image', 0.15);
//         this.addElement('.about-content', 0.05);
//         this.addElement('.project-card', 0.08);
//         this.addElement('.contact-content', 0.06);

//         this.bindEvents();
//     }

//     addElement(selector, speed) {
//         const elements = document.querySelectorAll(selector);
//         elements.forEach(element => {
//             this.elements.push({
//                 element,
//                 speed,
//                 offset: element.offsetTop
//             });
//         });
//     }

//     bindEvents() {
//         window.addEventListener('scroll', () => {
//             if (!this.rafId) {
//                 this.rafId = requestAnimationFrame(() => this.updateElements());
//             }
//         });
//     }

//     updateElements() {
//         const scrollTop = window.pageYOffset;

//         this.elements.forEach(({ element, speed, offset }) => {
//             const rect = element.getBoundingClientRect();
//             const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

//             if (isVisible) {
//                 const yPos = (scrollTop - offset) * speed;
//                 element.style.transform = `translateY(${yPos}px)`;
//             }
//         });

//         this.rafId = null;
//     }
// }

// Initialize parallax controller - DISABLED
// document.addEventListener('DOMContentLoaded', () => {
//     new ParallaxController();
// });

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-header, .hero-content');
revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    el.style.transitionDelay = `${index * 0.2}s`;

    setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 300);
});
/**
 * YouTube Tutorial:
 * https://youtu.be/wG_5453Vq98
 */

console.clear();

// Select the circle element
const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();
