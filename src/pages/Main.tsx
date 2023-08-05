import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.p`
  font-family: "Nanum Pen Script";
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: black;
  margin-bottom:10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 10S0%;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;
  margin-top:20px;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  right: 50%;
  animation: scrollAnimation 1s infinite;
  &:focus {
    outline: none;
  }
  @keyframes scrollAnimation {
    0% { transform: translateY(0); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0); }
  }
`;

const Main = () => {
  const images = ['Banner1.jpg', 'Banner2.jpg', 'Banner3.jpg', 'Banner4.jpg', 'Banner5.jpg'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <BannerContainer>
      <Title>오빠 모음 ZIP</Title>
      <ImageContainer>
        <SlideButton onClick={prevSlide} style={{ left: '10px' }}>
          &#10094;
        </SlideButton>
        <Image src={`/images/${images[current]}`} alt="" />
        <SlideButton onClick={nextSlide} style={{ right: '10px' }}>
          &#10095;
        </SlideButton>
      </ImageContainer>
      <ScrollButton>&#8595;</ScrollButton>
    </BannerContainer>
  );
};

export default Main;
