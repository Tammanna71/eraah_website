// src/components/AboutPage/AboutPage.js
import React from 'react';
import { AboutContainer, AboutContent, AboutVideo } from './AboutPage.styles';

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutVideo loop muted autoPlay>
        <source src="your-video-clip.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </AboutVideo>
      <AboutContent>
        <h1>Our Story</h1>
        <p>Eraah AI was founded with a vision to empower NGOs through cutting-edge AI solutions. We believe in leveraging technology to create a positive impact and drive meaningful change.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to develop and provide AI tools and platforms that enable NGOs to operate more efficiently, make data-driven decisions, and ultimately achieve their goals more effectively.</p>

        <h2>Our Values</h2>
        <ul>
          <li>Innovation: We continuously strive to develop innovative AI solutions.</li>
          <li>Impact: We are committed to making a positive impact on society.</li>
          <li>Collaboration: We believe in the power of collaboration and partnership.</li>
          <li>Integrity: We uphold the highest standards of integrity and ethical conduct.</li>
        </ul>

        <h2>Join Us</h2>
        <p>We invite you to join us in our journey to transform the NGO sector with the power of AI. Together, we can create a better future.</p>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;