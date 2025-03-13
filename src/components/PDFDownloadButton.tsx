"use client";

import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import portfolioData from '../data/portfolio-data';

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 12,
    marginBottom: 20,
  },
  experienceItem: {
    marginBottom: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  skillItem: {
    fontSize: 12,
    backgroundColor: '#f1f5f9',
    padding: '4 8',
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 4,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  languageItem: {
    backgroundColor: '#f1f5f9',
    padding: '4 8',
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 5,
  },
  languageText: {
    fontSize: 12,
  },
});

// Create PDF Document component
const ResumeDocument = () => (
  <Document title={`${portfolioData.name} - Resume`} author={portfolioData.name}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.header}>{portfolioData.name}</Text>
        <Text style={styles.subheader}>{portfolioData.title}</Text>
        <Text style={styles.contactInfo}>
          {portfolioData.email} | {portfolioData.phone} | {portfolioData.location}
        </Text>
        <Text style={styles.text}>{portfolioData.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Professional Experience</Text>
        {portfolioData.experiences.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.title}>
              {exp.position} | {exp.company} | {exp.period}
            </Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Skills</Text>
        <View style={styles.skillsContainer}>
          {portfolioData.skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>
              {skill.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Education</Text>
        {portfolioData.education.map((edu, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.title}>
              {edu.degree} | {edu.institution} | {edu.period}
            </Text>
            {edu.description && <Text style={styles.text}>{edu.description}</Text>}
          </View>
        ))}
      </View>

      {/* Languages - Updated to display horizontally */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Languages</Text>
        <View style={styles.languagesContainer}>
          {portfolioData.languages.map((lang, index) => (
            <View key={index} style={styles.languageItem}>
              <Text style={styles.languageText}>
                {lang.language}: {lang.proficiency}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// Client-side PDF Button component
const ClientPDFButton = () => {
  const [isClient, setIsClient] = useState(false);

  // Use effect to confirm we're on client side
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button className="button button--primary">
        Download CV
      </button>
    );
  }

  return (
    <PDFDownloadLink 
      document={<ResumeDocument />} 
      fileName={`${portfolioData.name.replace(/\s/g, '_')}_CV.pdf`}
      className="button button--primary"
    >
      {({ blob, url, loading, error }) => 
        loading ? 'Generating PDF...' : 'Download CV'
      }
    </PDFDownloadLink>
  );
};

export default ClientPDFButton;