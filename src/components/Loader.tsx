import { Trash2 } from "lucide-react";
import React from "react";
import styled from "styled-components";
import { animations } from "../styles/animations";

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin: 20px auto;
  ${animations.spin}// Apply spin animation: ;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    ${animations.scaleOpacity}// Apply spin animation: ;;
  }
`;

const Loader: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <IconContainer>
        <Trash2 color="#85b2ff" />
      </IconContainer>
    </SpinnerContainer>
  );
};

export default Loader;
