import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#3b82f6",
    background: "#f5f5f5",
    text: "#333",
    cardBackground: "#fff",
    buttonHover: "#2563eb",
    disabled: "#64748b",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#3b82f6",
    background: "#111",
    text: "#fff",
    cardBackground: "#1e1e2f",
    buttonHover: "#2563eb",
    disabled: "#64748b",
  },
};

export { lightTheme, darkTheme };