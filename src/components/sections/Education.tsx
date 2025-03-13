"use client";

import React, { useEffect, useRef } from 'react';
import portfolioData from '../../data/portfolio-data';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Store a reference to the current DOM node
    const currentRef = educationRef.current;
    
    // Animation for the education section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('education--animated');
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
  
  // Get languages from portfolio data
  const { languages } = portfolioData;
  
  return (
    <section id="education" className="education section section--light" ref={educationRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Education & Languages</h2>
          <p className="section__subtitle">My academic background and language skills</p>
        </div>
        
        <div className="education__content">
          <div className="education__col">
            <h3 className="education__heading">Education</h3>
            <div className="education__list">
              {portfolioData.education.map((edu, index) => (
                <div 
                  key={index} 
                  className="education__item"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="education__card">
                    <div className="education__period">{edu.period}</div>
                    <h4 className="education__degree">{edu.degree}</h4>
                    <h5 className="education__institution">{edu.institution}</h5>
                    {edu.description && (
                      <p className="education__description">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education__col">
            <h3 className="education__heading">Languages</h3>
            <div className="education__languages">
              {languages.map((lang, index) => (
                <div 
                  key={index} 
                  className="education__language-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="education__language-card">
                    <h4 className="education__language-name">{lang.language}</h4>
                    <div className="education__language-level">
                      <span className="education__language-proficiency">
                        {lang.proficiency}
                      </span>
                      <div className="education__language-bar">
                        <div 
                          className="education__language-progress"
                          style={{ 
                            width: lang.proficiency === 'Native' ? '100%' : 
                                  lang.proficiency === 'Fluent' ? '85%' : 
                                  lang.proficiency === 'Advanced' ? '75%' : 
                                  lang.proficiency === 'Intermediate' ? '60%' : 
                                  lang.proficiency === 'Basic' ? '40%' : '20%' 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="education__additional">
              <h3 className="education__heading">Certifications</h3>
              <div className="education__certifications">
                <div className="education__cert-item">
                  <div className="education__cert-card">
                    <h4 className="education__cert-name">System Developer .NET</h4>
                    <p className="education__cert-issuer">Lexicon</p>
                    <p className="education__cert-date">2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;