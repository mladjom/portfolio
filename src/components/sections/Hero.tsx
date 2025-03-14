"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import portfolioData from '../../data/portfolio-data';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Store a reference to the current DOM node
    const currentRef = heroRef.current;
    
    // Animation for the hero section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero--animated');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      // Use the stored reference in the cleanup function
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__subtitle">Hello, I&apos;m</span>
              <span className="hero__name">{portfolioData.name}</span>
            </h1>
            <h2 className="hero__role">{portfolioData.title}</h2>
            <p className="hero__description">{portfolioData.summary}</p>
            
            <div className="hero__cta">
              <button className="button button--primary" onClick={handleContactClick}>
                Get In Touch
              </button>
              <button className="button button--outline" onClick={handleProjectsClick}>
                View Projects
              </button>
            </div>
          </div>
          
          <div className="hero__image">
            <div className="hero__image-container">
              <Image 
                src="/images/avatar.svg"
                alt={portfolioData.name}
                width={400}
                height={450}
                className="hero__img"
                priority
              />
            </div>
            
            <div className="hero__experience-badge">
              <div className="hero__badge-content">
                <span className="hero__badge-number">10+</span>
                <span className="hero__badge-text">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero__scroll-down">
          <button
            className="hero__scroll-button"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Scroll to About section"
          >
            <div className="hero__scroll-icon"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;