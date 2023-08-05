import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top 10px:
`;

const CaptureButton = styled.button`
  background-color: #6ea048;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script", sans-serif;
  font-size: 20px;
`;

const CapturedImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const CapturedImage = styled.img`
  border-radius: 6px;
  width: 400px;
  height: 300px;
  margin-top 40px:
  
`;

const PhotoPage: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  const handleCapture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImages([...capturedImages, imageSrc]);
    }
  };

  return (
    <PhotoContainer>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <CaptureButton onClick={handleCapture}>사진 찍기</CaptureButton>
      <CapturedImages>
        {capturedImages.map((imageSrc, index) => (
          <CapturedImage key={index} src={imageSrc} />
        ))}
      </CapturedImages>
    </PhotoContainer>
  );
};

export default PhotoPage;
