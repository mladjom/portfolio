"use client";

import React, { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useRouter } from 'next/navigation';
import portfolioData from '../../data/portfolio-data';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const headerClass = `header ${isScrolled ? 'header--scrolled' : ''}`;
  const mobileMenuClass = `header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo" onClick={() => scrollToSection('hero')}>
            <span className="header__logo-text">{portfolioData.name.split(' ')[0]}</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="header__nav">
            <NavigationMenu.List className="header__nav-list">
              <NavigationMenu.Item>
                <NavigationMenu.Link 
                  className="header__nav-link" 
                  onClick={() => scrollToSection('about')}
                >
                  About
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link 
                  className="header__nav-link" 
                  onClick={() => scrollToSection('skills')}
                >
                  Skills
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link 
                  className="header__nav-link" 
                  onClick={() => scrollToSection('experience')}
                >
                  Experience
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link 
                  className="header__nav-link" 
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link 
                  className="header__nav-link" 
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu Button */}
          <button 
            className="header__mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div className={mobileMenuClass}>
            <nav className="header__mobile-nav">
              <ul className="header__mobile-nav-list">
                <li className="header__mobile-nav-item">
                  <button className="header__mobile-nav-link" onClick={() => scrollToSection('about')}>
                    About
                  </button>
                </li>
                <li className="header__mobile-nav-item">
                  <button className="header__mobile-nav-link" onClick={() => scrollToSection('skills')}>
                    Skills
                  </button>
                </li>
                <li className="header__mobile-nav-item">
                  <button className="header__mobile-nav-link" onClick={() => scrollToSection('experience')}>
                    Experience
                  </button>
                </li>
                <li className="header__mobile-nav-item">
                  <button className="header__mobile-nav-link" onClick={() => scrollToSection('projects')}>
                    Projects
                  </button>
                </li>
                <li className="header__mobile-nav-item">
                  <button className="header__mobile-nav-link" onClick={() => scrollToSection('contact')}>
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;