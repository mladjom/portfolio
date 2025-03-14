"use client";

import React, { useEffect, useRef } from 'react';
import portfolioData from '../../data/portfolio-data';
import PDFDownloadButton from '../PDFDownloadButton';

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Store a reference to the current DOM node
    const currentRef = experienceRef.current;
    
    // Animation for the experience section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('experience--animated');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px',
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
  
  return (
    <section id="experience" className="experience section section--light" ref={experienceRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Work Experience</h2>
          <p className="section__subtitle">My professional journey</p>
        </div>
        
        <div className="experience__content">
          <div className="experience__timeline">
            {portfolioData.experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`experience__item ${index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="experience__card">
                  <div className="experience__period">{experience.period}</div>
                  <h3 className="experience__position">{experience.position}</h3>
                  <h4 className="experience__company">{experience.company}</h4>
                  <p className="experience__description">{experience.description}</p>
                  
                  <div className="experience__skills">
                    {experience.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="experience__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="experience__download">
            <p>Want to know more about my work experience?</p>
            <PDFDownloadButton />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;