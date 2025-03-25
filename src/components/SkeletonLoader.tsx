import React from "react";
import styled from "styled-components";
import { animations } from "../styles/animations";

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const SkeletonCard = styled.div`
  width: 300px;
  height: 200px;
  background: #333;
  border-radius: 10px;
  ${animations.pulse}
`;

const SkeletonLoader: React.FC = () => {
  return (
    <SkeletonContainer>
      {[...Array(6)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonLoader;