import React from "react";
import styled from "styled-components";
import ProgressSteps from "../ProgressSteps";
import { useAppContext } from "../../context/AppContext";
import SkipSelectPage from "../../pages/SkipSelectPage";
import ThemeToggle from "../ThemeToggle";
import NavigationButtons from "../NavigationButtons";

const Container = styled.div<{ $darkMode: boolean }>`
  padding: 7px 120px;
  background: ${({ $darkMode }) =>
    $darkMode
      ? "linear-gradient(135deg, #111, #333)"
      : "linear-gradient(135deg, #f4f4f4, #dfdfdf)"};
  min-height: 100vh;
  padding-bottom: 120px;
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 20px;
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
    <Container $darkMode={darkMode}>
      <ThemeToggle />
      <ProgressSteps />
      <SkipSelectPage />
      <NavigationButtons />
    </Container>
  );
};

export default PageContainer;
