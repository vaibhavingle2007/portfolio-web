'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const words = ["smarter", "bolder", "cleaner", "crazier", "newer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="modern-hero">
      <div className="modern-hero-content">
        <h1 className="modern-hero-title">
          BUILDING COOL STUFF<br />
          WHILE LEARNING EVEN<br />
          <span style={{ whiteSpace: 'nowrap' }}>
            <span className="modern-rotating-container">
              <span 
                className={`modern-rotating-word ${isFading ? 'fading' : ''}`}
              >
                {words[currentWordIndex]}
              </span>
            </span> THINGS.
          </span>
        </h1>
        <p className="modern-hero-description">
          Passionate about web development and creative problem-solving.
        </p>
        <div className="modern-hero-buttons">
          <a href="#projects" className="modern-hero-button">View Projects</a>
          <a href="#contact" className="modern-hero-button-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
