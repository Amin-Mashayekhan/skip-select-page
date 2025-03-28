import React from "react";
import styled, { css } from "styled-components";
import { useAppContext } from "../context/AppContext";
import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";
import { animations } from "../styles/animations";

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 40px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 20px;
  }
`;

const Step = styled.div<{ $active: boolean; $completed: boolean }>`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: ${({ $active, $completed, theme }) =>
    $completed || $active ? theme.colors.primary : "#444"};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease; // Performance optimization
  cursor: not-allowed;
  ${({ $active }) =>
    $active &&
    css`
      ${animations.blueShadow}
    `}

  &:hover {
    transform: ${({ $completed, $active }) => ($completed || $active ? "scale(1.05)" : "none")};
  }
`;

const StepLabel = styled.div<{ $active: boolean }>`
  display: none;
  position: absolute;
  top: 48px;
  width: 100px;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : "#888")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  @media (min-width: ${({ theme }) => theme.breakPoints.mobileLG}) {
    display: inline-block;
  }
`;

const Connector = styled.div<{ $completed: boolean }>`
  height: 2px;
  background: ${({ $completed, theme }) =>
    $completed ? theme.colors.primary : "#444"};
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

const ProgressSteps: React.FC = () => {
  const { currentStep } = useAppContext();
  const steps = [
    { id: 1, icon: <MapPin />, label: "Postcode" },
    { id: 2, icon: <Trash2 />, label: "Waste Type" },
    { id: 3, icon: <Truck />, label: "Select Skip" },
    { id: 4, icon: <Shield />, label: "Permit Check" },
    { id: 5, icon: <Calendar />, label: "Choose Date" },
    { id: 6, icon: <CreditCard />, label: "Payment" },
  ];

  return (
    <StepsContainer>
      <Connector $completed={currentStep > 1} />
      {steps.map((step) => (
        <React.Fragment key={step.id}>
          <Step
            $active={currentStep === step.id}
            $completed={currentStep > step.id}
          >
            {step.icon}
            <StepLabel $active={currentStep === step.id}>
              {step.label}
            </StepLabel>
          </Step>
          {step.id < steps.length && (
            <div style={{ width: "66px", minWidth: "12px" }} />
          )}
        </React.Fragment>
      ))}
    </StepsContainer>
  );
};

export default ProgressSteps;
