import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner /> 
    </SpinnerContainer>
  );
};

export default Loader;