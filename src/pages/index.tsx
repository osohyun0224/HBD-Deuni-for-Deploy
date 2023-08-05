import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #92D061;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  font-family: Nanum Gothic;
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 10px; 
`;

const Button = styled.button`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 48px; 
  padding: 13px 24px;
  border-radius: 6px;
  margin-top: 30px;
  &:focus {
    outline: none;
  }
  &.active {
    background-color: #6EA048;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px; /* 버튼간 간격 20px로 설정 */
`;

const IndexPage = () => {
  const [activeButton, setActiveButton] = useState('Main');
  const buttons = ['Main', 'To Deuni', 'Photo', 'Memory', 'Letter for Deuni'];

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <Main>
      <Title>❤️드니야, 24번째 생일축하해❤️</Title>
      <ButtonsContainer>
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={activeButton === button ? 'active' : ''}
            onClick={() => handleClick(button)}
          >
            {button}
          </Button>
        ))}
      </ButtonsContainer>
    </Main>
  );
};

export default IndexPage;
