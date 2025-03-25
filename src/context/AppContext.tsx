import React, { createContext, useContext, useState, useEffect } from "react";
import { Skip } from "../types/Skip";

interface AppContextProps {
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip | null) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [currentStep, setCurrentStep] = useState(3); // Starting at step 3 since that's what exists

  useEffect(() => {
    // Load from localStorage
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === "true");
    }

    const savedSkip = localStorage.getItem("selectedSkip");
    if (savedSkip) {
      setSelectedSkip(JSON.parse(savedSkip));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
  };

  const handleSetSelectedSkip = (skip: Skip | null) => {
    if (selectedSkip?.id === skip?.id) {
      setSelectedSkip(null);
      localStorage.removeItem("selectedSkip");
    } else {
      setSelectedSkip(skip);
      localStorage.setItem("selectedSkip", JSON.stringify(skip));
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedSkip,
        setSelectedSkip: handleSetSelectedSkip,
        darkMode,
        toggleDarkMode,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
