import React from "react";
import styled from "styled-components";
import { Moon, Sun } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const StyledThemeToggle = styled.button`
  position: fixed;
  top: 7px;
  right: 7px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle: React.FC = () => {
  const {
    darkMode,
    toggleDarkMode,
  } = useAppContext();

  return (
      <StyledThemeToggle onClick={toggleDarkMode}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </StyledThemeToggle>
  );
};

export default ThemeToggle;
