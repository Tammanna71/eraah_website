// src/components/LandingPage/LandingPage.styles.js
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

export const LandingContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
    animation: ${fadeIn} 1s ease-out;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    animation: ${fadeIn} 1s ease-out 0.2s forwards;
  }
`;

export const ContentSection = styled.section`
  padding: 4rem 0;
  max-width: 800px;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.secondary};
    animation: ${fadeIn} 1s ease-out 0.4s forwards;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    animation: ${fadeIn} 1s ease-out 0.6s forwards;
  }
`;
// src/components/LandingPage/LandingPage.styles.js
// ... (existing styles)

export const CarouselSection = styled.section`
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
`;