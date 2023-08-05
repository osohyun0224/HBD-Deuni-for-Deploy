import React from 'react';
import styled from 'styled-components';

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TitleText = styled.h1`
  font-family: "Nanum Pen Script", cursive;
  font-size: 30px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 10px;
  margin-top: 0px;
`;

const LetterPaper = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const LetterText = styled.p`
  line-height: 24px;
  position: relative;
`;

const WaveLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    black 21px,
    black 22px,
    transparent 23px
  );
  opacity: 0.05;
`;

const LetterPage: React.FC = () => {
  return (
    <LetterContainer>
      <TitleText>사랑하는 오빠에게</TitleText>
      <LetterPaper>
        <WaveLines />
        <LetterText>
          블라블라...<br/>
          사랑해!
        </LetterText>
      </LetterPaper>
    </LetterContainer>
  );
};

export default LetterPage;
