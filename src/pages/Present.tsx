import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PresentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const CelebrationText = styled.h1`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const CountdownText = styled.div`
  font-size: 50px;
  color: black;
`;

type ImageProps = {
  show: boolean;
};

const Image = styled.img<ImageProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 40%; 
  height: auto; 
`;


const PresentPage: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowImage(true);
    }
  }, [countdown]);

  return (
    <PresentContainer>
      <CelebrationText>오빠를 위한 선물은 과연 무엇일까요 ...?</CelebrationText>
      {!showImage && <CountdownText>{countdown}</CountdownText>}
      <Image show={showImage} src="/images/present.jpg" alt="present"/>
    </PresentContainer>
  );
};

export default PresentPage;
