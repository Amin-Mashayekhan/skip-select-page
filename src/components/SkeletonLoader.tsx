import React from "react";
import styled from "styled-components";

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
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
    }
  }
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