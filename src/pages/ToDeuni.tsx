import React, { useState } from "react";
import styled from "styled-components";

const ToDeuniContainer = styled.div`
  background-color: #EEF1F4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  font-family: "Nanum Pen Script", cursive;
  font-size: 30px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 10px;
  margin-top: -20px;
`;

const AddButton = styled.button`
  width: 274px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #3D631F;
  background: #ffffff;
  cursor: pointer;

  font-family: "Nanum Pen Script", cursive;
  font-weight: 600;
  font-size: 16px;
  color: #3D631F;
`;

const MessageInput = styled.textarea`
  width: 500px;
  height: 165px;
  border-radius: 0px;
  background-color: #B4DD94;
  font-family: "Nanum Pen Script", cursive;
  font-size: 30px;
  color: black;
`;

const MessageContainer = styled.div`
  width: 35%;
  font-family: "Nanum Pen Script", cursive;
  padding: 13px 24px 13px 24px;
  border-radius: 6px;
  background: #A0C583; 
  margin-top: 20px;
  word-wrap: break-word;
  color: black;
  gap: 10px; 
  display: flex; 
  flex-direction: column; 
`;


const ToDeuniPage = () => {
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");
  const [userMessages, setUserMessages] = useState<string[]>([]);

  const handleAddClick = () => {
    setShowInput(true);
  };

  const handleConfirmClick = () => {
    setShowInput(false);
    setUserMessages([...userMessages, message]);
    setMessage("");
  };

  return (
    <ToDeuniContainer>
      <Title>드니에게 생일 축하 인사를 남겨보세요!</Title>
      {showInput ? (
        <>
          <MessageInput value={message} onChange={(e) => setMessage(e.target.value)} />
          <AddButton onClick={handleConfirmClick}>확인</AddButton>
        </>
      ) : (
        <AddButton onClick={handleAddClick}>추가하기</AddButton>
      )}
      {userMessages.map((userMessage, index) => (
        <MessageContainer key={index}>{userMessage}</MessageContainer>
      ))}
    </ToDeuniContainer>
  );
};

export default ToDeuniPage;


