// src/components/LandingPage/LandingPage.js
import React from 'react';
import { LandingContainer, HeroSection, ContentSection } from './LandingPage.styles';
import Button from '../Common/Button';
import Carousel from './Carousel';

const LandingPage = () => {
  const services = [
    {
      title: 'AI Reporting',
      description: 'Generate reports with AI insights.',
      image: 'https://ibmix.de/wp-content/uploads/2024/09/Blogpost-IBM-16x9-1.png', // Placeholder image
    },
    {
      title: 'Data Analysis',
      description: 'Analyze data for informed decisions.',
      image: 'https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg', // Placeholder image
    },
    {
      title: 'Automation',
      description: 'Automate tasks for efficiency.',
      image: 'https://breezeblog.s3.amazonaws.com/7/project_automation.jpg', // Placeholder image
    },
    // Add more services
  ];

  return (
    <LandingContainer>
      <HeroSection>
        <h1>Empowering NGOs with AI</h1>
        <p>Revolutionize operations with specialized AI agents and SaaS platforms.</p>
        <Button>Get Started</Button>
      </HeroSection>
      <Carousel slides={services} />
      <ContentSection>
        <h2>Our AI Services</h2>
        <p>We provide AI-powered report generation, data analysis, and intelligent automation to enhance your NGO's impact.</p>
      </ContentSection>
    </LandingContainer>
  );
};

export default LandingPage;