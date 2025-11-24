'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? 'visible' : ''}`}>
      <div className="nav-container">
        <Link href="#" className="nav-logo">
          <Image src="/assets/logo.svg" alt="Vaibhav Ingle" width={92} height={42} />
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>Project</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
        </div>
        <a href="/resume.pdf" className="nav-link-resume" download="Vaibhav_Ingle_Resume.pdf">Resume</a>
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
