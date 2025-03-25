import React from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.transparentDark};
  padding: 16px 24px;
  position: fixed;
  bottom: 0%;
  left: 0;
  right: 0;
  width: 100;
  visibility: hidden;
  transform: translateY(70px);
  opacity: 0;
  transition: visibility 0.1s ease, opacity 0.1s ease, transform 0.1s ease;
  &[data-skip-selected] {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: unset;
    bottom: 61px;
    padding: 10px 0 4px;

  }
`;

const NavButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease, transform 0.3s ease,;

  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary};
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    opacity: 0.7;
  }
`;

const NavigationButtons: React.FC = () => {
  const {
    selectedSkip,
    // following variables will be used after developing another progress steps
    // currentStep,
    // setCurrentStep,
  } = useAppContext();
  const totalPrice = ((selectedSkip?.price_before_vat || 0) * (1 + (selectedSkip?.vat || 0) / 100)).toFixed(0);


  return (
    <NavigationButtonsContainer data-skip-selected={selectedSkip}>
      <NavButton disabled>
        <ArrowLeft size={18} />
        Previous
      </NavButton>
      <h4>{(selectedSkip?.size || 0)+" Yard Skip / £"+totalPrice}</h4>
      <NavButton>
        Next
        <ArrowRight size={18} />
      </NavButton>
    </NavigationButtonsContainer>
  );
};

export default NavigationButtons;
