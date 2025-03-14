"use client";

import React, { useEffect, useRef, useState } from 'react';
import portfolioData from '../../data/portfolio-data';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Store a reference to the current DOM node
    const currentRef = contactRef.current;

    // Animation for the contact section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('contact--animated');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      // Send the form data to the API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Success
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          type: null,
          message: ''
        });
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section" ref={contactRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Get In Touch</h2>
          <p className="section__subtitle">Let&apos;s discuss your project or just say hello</p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-heading">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of the following methods:</p>
            </div>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact__info-content">
                  <h4>Phone</h4>
                  <a href={`tel:${portfolioData.phone}`} className="contact__info-link">
                    {portfolioData.phone}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact__info-content">
                  <h4>Email</h4>
                  <a href={`mailto:${portfolioData.email}`} className="contact__info-link">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="contact__info-content">
                  <h4>Location</h4>
                  <p>{portfolioData.location}</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="contact__info-content">
                  <h4>Website</h4>
                  <a href={`https://${portfolioData.website}`} target="_blank" rel="noopener noreferrer" className="contact__info-link">
                    {portfolioData.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <h4>Connect with me</h4>
              <div className="contact__social-links">
                <a href="https://github.com/mladjom" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/mladen-milentijevic" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com/mladjom" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              {/* ... form fields ... */}
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__form-input"
                  required
                  autoComplete="name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__form-input"
                  required
                  autoComplete="email"
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact__form-input"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__form-textarea"
                  rows={5}
                  required
                  autoComplete="off"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="contact__form-submit">
                <button
                  type="submit"
                  className="button button--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;