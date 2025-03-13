"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import portfolioData from '../../data/portfolio-data';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  useEffect(() => {
    // Store a reference to the current DOM node
    const currentRef = projectsRef.current;
    
    // Animation for the projects section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('projects--animated');
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
  
  const openProjectDetails = (index: number) => {
    setSelectedProject(index);
  };
  
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  
  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">My Projects</h2>
          <p className="section__subtitle">Some of my recent work</p>
        </div>
        
        <div className="projects__grid">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className="projects__item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="projects__card" onClick={() => openProjectDetails(index)}>
                <div className="projects__image">
                  <Image 
                    src={`/images/projects/${project.image || 'default-project.jpg'}`}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="projects__img"
                  />
                </div>
                
                <div className="projects__info">
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__description">{project.description}</p>
                </div>
                
                <div className="projects__tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="projects__overlay">
                  <button className="projects__view-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Details Modal */}
        <Dialog.Root open={selectedProject !== null} onOpenChange={closeProjectDetails}>
          <Dialog.Portal>
            <Dialog.Overlay className="projects__modal-overlay" />
            <Dialog.Content className="projects__modal">
              {selectedProject !== null && (
                <>
                  <div className="projects__modal-header">
                    <Dialog.Title className="projects__modal-title">
                      {portfolioData.projects[selectedProject].title}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="projects__modal-close" aria-label="Close">
                        <span>&times;</span>
                      </button>
                    </Dialog.Close>
                  </div>
                  
                  <div className="projects__modal-image">
                    <Image 
                      src={`/images/projects/${portfolioData.projects[selectedProject].image || 'default-project.jpg'}`}
                      alt={portfolioData.projects[selectedProject].title}
                      width={1000}
                      height={562}
                      className="projects__modal-img"
                    />
                  </div>
                  
                  <div className="projects__modal-content">
                    <p className="projects__modal-description">
                      {portfolioData.projects[selectedProject].description}
                    </p>
                    
                    <div className="projects__modal-tech">
                      <h4>Technologies Used:</h4>
                      <div className="projects__modal-tech-list">
                        {portfolioData.projects[selectedProject].technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="projects__modal-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="projects__modal-links">
                      {portfolioData.projects[selectedProject].link && (
                        <a 
                          href={portfolioData.projects[selectedProject].link} 
                          className="button button--primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      
                      {portfolioData.projects[selectedProject].github && (
                        <a 
                          href={`https://${portfolioData.projects[selectedProject].github}`} 
                          className="button button--outline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default Projects;