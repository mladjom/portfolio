"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import portfolioData from '../../data/portfolio-data';
import PDFDownloadButton from '../PDFDownloadButton';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animation for the about section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about--animated');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px',
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about section section--light" ref={aboutRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">Get to know me better</p>
        </div>

        <div className="about__content">
          <div className="about__image">
            <div className="about__image-container">
              <Image
                src="/images/about.jpg"
                alt="About Mladen Milentijevic"
                width={500}
                height={600}
                className="about__img"
              />
            </div>

            <div className="about__experience">
              <div className="about__experience-item">
                <span className="about__experience-number">10+</span>
                <span className="about__experience-text">Years of Experience</span>
              </div>

              <div className="about__experience-item">
                <span className="about__experience-number">50+</span>
                <span className="about__experience-text">Projects Completed</span>
              </div>

              <div className="about__experience-item">
                <span className="about__experience-number">30+</span>
                <span className="about__experience-text">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="about__text">
            <h3 className="about__greeting">Hello! I'm <span className="about__name">{portfolioData.name}</span></h3>

            <p className="about__description">
              I am a passionate and dedicated software developer with over a decade of experience in building
              websites, web applications, and digital solutions for clients across various industries.
              Based in Malmö, Sweden, I specialize in full-stack development with a focus on PHP,
              JavaScript, and modern web technologies.
            </p>

            <p className="about__description">
              Throughout my career, I've worked on projects ranging from small business websites to
              large e-commerce platforms and complex web applications. I'm committed to writing clean,
              maintainable code and creating user-friendly, responsive designs that provide exceptional
              user experiences.
            </p>

            <p className="about__description">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
              and sharing my knowledge with the developer community. I'm always eager to take on new
              challenges and continue expanding my skill set in this ever-evolving industry.
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-label">Name:</span>
                <span className="about__info-value">{portfolioData.name}</span>
              </div>

              <div className="about__info-item">
                <span className="about__info-label">Email:</span>
                <a href={`mailto:${portfolioData.email}`} className="about__info-value about__info-link">
                  {portfolioData.email}
                </a>
              </div>

              <div className="about__info-item">
                <span className="about__info-label">Phone:</span>
                <a href={`tel:${portfolioData.phone}`} className="about__info-value about__info-link">
                  {portfolioData.phone}
                </a>
              </div>

              <div className="about__info-item">
                <span className="about__info-label">Location:</span>
                <span className="about__info-value">{portfolioData.location}</span>
              </div>

              <div className="about__info-item">
                <span className="about__info-label">Languages:</span>
                <span className="about__info-value">
                  {portfolioData.languages.map(lang => lang.language).join(', ')}
                </span>
              </div>
            </div>

            <div className="about__cta">
              <PDFDownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;