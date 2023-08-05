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
  z-index: 1;
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
  z-index: 0;
`;

const LetterPage: React.FC = () => {
  return (
    <LetterContainer>
      <TitleText>사랑하는 오빠에게</TitleText>
      <LetterPaper>
        <WaveLines />
        <LetterText>
          사랑하는 드니야, 24번째 생일 축하해! <br />
          우리도 만난지 벌써 반년이 되어간다 ... 시간이 엄청 빨라<br/>
          나는 추운 겨울에 태어났는데, 오빠는 한 여름에 태어났네 ㅋㅋㅋㅋ<br />
          여름에 태어나서 그런지 공부가 힘들어도 나에게 내색 안하고 <br />
          운동도 항상 열심히 하는 모습에 오빠의 열정이 항상 느껴져 <br/>
          중략....<br/>
          ㅋㅋㅋㅋㅋ 내 마지막 생일 이벤트 어때? ㅋㅋㅋㅋㅋ 난 밤새도록 코딩했지만 <br/>
          오빠가 이거 보고 행복하다면 난 그걸로 만족해 ㅎㅎ <br/>
          앞으로도 잘 부탁드리구요 ㅎㅎ 다시 한번 더 생일축하한닷 <br/>
          사랑해!
        </LetterText>
      </LetterPaper>
    </LetterContainer>
  );
};

export default LetterPage;
