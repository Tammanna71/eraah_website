
// src/components/AboutPage/AboutPage.styles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 0; // Remove padding
  margin: 0; // Remove margins
  width: 100%; // Ensure it fills the width
  display: flex;
  flex-direction: column;
  align-items: center; // Center content horizontally
`;

export const AboutVideo = styled.video`
  width: 100%;
  height: auto; // Let the video determine its height based on aspect ratio
  max-height: 500px; // Set a maximum height to control size
  object-fit: cover;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

export const AboutContent = styled.div`
  max-width: 1000px;
  width: 100%; // Ensure it fills the width
  padding: 2rem;
  h1, h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
    font-family: 'Montserrat', sans-serif;
    animation: ${fadeIn} 1s ease-out 0.2s forwards;
  }

  p, li {
    font-size: 1.1rem;
    line-height: 1.8;
    font-family: 'Roboto', sans-serif;
    animation: ${fadeIn} 1s ease-out 0.4s forwards;
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;