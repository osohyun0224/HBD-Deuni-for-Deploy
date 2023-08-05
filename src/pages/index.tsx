import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #92D061;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const Button = styled.button`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  background-color: white;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.active {
    background-color: #6EA048;
  }
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
      {buttons.map((button, index) => (
        <Button
          key={index}
          className={activeButton === button ? 'active' : ''}
          onClick={() => handleClick(button)}
        >
          {button}
        </Button>
      ))}
      {}
    </Main>
  );
};

export default IndexPage;
