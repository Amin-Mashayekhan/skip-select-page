import React from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProgressSteps from "../components/ProgressSteps";
import { useAppContext } from "../context/AppContext";
import SkipSelectPage from "../pages/SkipSelectPage";
import ThemeToggle from "./ThemeToggle";

const Container = styled.div<{ darkMode: boolean }>`
  padding: 7px;
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(135deg, #111, #333)"
      : "linear-gradient(135deg, #f4f4f4, #dfdfdf)"};
  min-height: 100vh;
  @media (min-width: 576px) {
    padding: 20px;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  padding: 0 20px;
`;

const NavButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #64748b;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const PageContainer: React.FC = () => {
  const {
    darkMode,
    // following variables will be used after developing another progress steps
    // currentStep,
    // setCurrentStep,
  } = useAppContext();

  return (
    <Container darkMode={darkMode}>
        <ThemeToggle />
      <ProgressSteps />
      <SkipSelectPage />
      <NavigationButtons>
        <NavButton disabled>
          <ArrowLeft size={18} />
          Previous
        </NavButton>
        <NavButton disabled>
          Next
          <ArrowRight size={18} />
        </NavButton>
      </NavigationButtons>
    </Container>
  );
};

export default PageContainer;
