"use client";

import React from 'react';
import portfolioData from '../../data/portfolio-data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <div className="footer__logo">
              <span className="footer__logo-text">{portfolioData.name}</span>
            </div>
            <p className="footer__description">
              {portfolioData.title}
            </p>
          </div>
          
          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <button 
                  className="footer__nav-link" 
                  onClick={() => {
                    const section = document.getElementById('about');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </button>
              </li>
              <li className="footer__nav-item">
                <button 
                  className="footer__nav-link" 
                  onClick={() => {
                    const section = document.getElementById('skills');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="footer__nav-item">
                <button 
                  className="footer__nav-link" 
                  onClick={() => {
                    const section = document.getElementById('experience');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Experience
                </button>
              </li>
              <li className="footer__nav-item">
                <button 
                  className="footer__nav-link" 
                  onClick={() => {
                    const section = document.getElementById('projects');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </button>
              </li>
              <li className="footer__nav-item">
                <button 
                  className="footer__nav-link" 
                  onClick={() => {
                    const section = document.getElementById('contact');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-label">Email:</span>
                <a href={`mailto:${portfolioData.email}`} className="footer__contact-link">
                  {portfolioData.email}
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-label">Phone:</span>
                <a href={`tel:${portfolioData.phone}`} className="footer__contact-link">
                  {portfolioData.phone}
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-label">Website:</span>
                <a href={`https://${portfolioData.website}`} className="footer__contact-link" target="_blank" rel="noopener noreferrer">
                  {portfolioData.website}
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-label">GitHub:</span>
                <a href={`https://${portfolioData.github}`} className="footer__contact-link" target="_blank" rel="noopener noreferrer">
                  {portfolioData.github}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} {portfolioData.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;