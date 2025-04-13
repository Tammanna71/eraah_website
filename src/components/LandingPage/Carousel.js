// src/components/LandingPage/Carousel.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
//   justify-content: center; 
`;

const SlideItem = styled.div`
  min-width: 100%;
  padding: 2rem;
  text-align: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.surface};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  width: 300px;
  margin: 0 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-family: 'Montserrat', sans-serif;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const MoreButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, active }) => active ? theme.primary : theme.text};
  margin: 0 5px;
  cursor: pointer;
`;

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <CarouselContainer>
      <NavButton direction="left" onClick={prevSlide}><FaChevronLeft /></NavButton>
      <CarouselSlide style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <SlideItem key={index}>
            <Card>
              <CardImage src={slide.image} alt={slide.title} />
              <CardContent>
                <CardTitle>{slide.title}</CardTitle>
                <CardDescription>{slide.description}</CardDescription>
                <MoreButton>More &gt;</MoreButton>
              </CardContent>
            </Card>
          </SlideItem>
        ))}
      </CarouselSlide>
      <NavButton direction="right" onClick={nextSlide}><FaChevronRight /></NavButton>
      <Dots>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
        ))}
      </Dots>
    </CarouselContainer>
  );
};

export default Carousel;