"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import portfolioData from '../../data/portfolio-data';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Group skills by category
  const skillCategories = {
    all: portfolioData.skills,
    frontend: portfolioData.skills.filter(skill => skill.category === 'frontend'),
    backend: portfolioData.skills.filter(skill => skill.category === 'backend'),
    database: portfolioData.skills.filter(skill => skill.category === 'database'),
    devops: portfolioData.skills.filter(skill => skill.category === 'devops'),
    other: portfolioData.skills.filter(skill => skill.category === 'other'),
  };
  
  useEffect(() => {
    // Animation for the skills section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skills--animated');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px',
      }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  // Get skill level text based on numeric level
  const getSkillLevelText = (level: number): string => {
    switch (level) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Basic';
      case 3:
        return 'Intermediate';
      case 4:
        return 'Advanced';
      case 5:
        return 'Expert';
      default:
        return 'Intermediate';
    }
  };
  
  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">My Skills</h2>
          <p className="section__subtitle">What I bring to the table</p>
        </div>
        
        <div className="skills__content">
          <Tabs.Root 
            className="skills__tabs" 
            defaultValue="all"
            onValueChange={(value) => setActiveTab(value)}
          >
            <Tabs.List className="skills__tab-list">
              <Tabs.Trigger 
                className={`skills__tab-trigger ${activeTab === 'all' ? 'skills__tab-trigger--active' : ''}`} 
                value="all"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger 
                className={`skills__tab-trigger ${activeTab === 'frontend' ? 'skills__tab-trigger--active' : ''}`} 
                value="frontend"
              >
                Frontend
              </Tabs.Trigger>
              <Tabs.Trigger 
                className={`skills__tab-trigger ${activeTab === 'backend' ? 'skills__tab-trigger--active' : ''}`} 
                value="backend"
              >
                Backend
              </Tabs.Trigger>
              <Tabs.Trigger 
                className={`skills__tab-trigger ${activeTab === 'database' ? 'skills__tab-trigger--active' : ''}`} 
                value="database"
              >
                Database
              </Tabs.Trigger>
              <Tabs.Trigger 
                className={`skills__tab-trigger ${activeTab === 'devops' ? 'skills__tab-trigger--active' : ''}`} 
                value="devops"
              >
                DevOps
              </Tabs.Trigger>
              <Tabs.Trigger 
                className={`skills__tab-trigger ${activeTab === 'other' ? 'skills__tab-trigger--active' : ''}`} 
                value="other"
              >
                Other
              </Tabs.Trigger>
            </Tabs.List>
            
            {Object.entries(skillCategories).map(([category, skills]) => (
              <Tabs.Content 
                key={category} 
                className="skills__tab-content" 
                value={category}
              >
                <div className="skills__grid">
                  {skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skills__item"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="skills__item-header">
                        <h3 className="skills__item-name">{skill.name}</h3>
                        <span className="skills__item-level">
                          {getSkillLevelText(skill.level)}
                        </span>
                      </div>
                      
                      <div className="skills__progress">
                        <div 
                          className="skills__progress-bar" 
                          style={{ width: `${skill.level * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default Skills;