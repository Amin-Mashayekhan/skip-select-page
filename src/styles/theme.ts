// Visit the global typing file of current file on the path: src/styledTheme.d.ts

import { DefaultTheme } from "styled-components";



const sharedTheme = {
  breakPoints: { tablet: "768px", mobileLG: "576px", mobileM: "450px" },
};

const lightTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    darkPrimary: "rgb(0, 54, 141)",
    darkPrimaryRGB: "0, 54, 141",
    primary: "#3b82f6",
    lightPrimary: "#2563eb",
    light: "#fff",
    background: "#f5f5f5",
    text: "#666",
    cardBackground: "#fff",
    disabled: "#64748b",
    transparentWhite: "rgba(255, 255, 255, 0.8)",
    lightTransparentWhite: "rgba(255, 255, 255, 0.5)",
    transparentGray: "rgb(200, 200, 200)",
    lightTransparentGray: "rgb(214, 214, 214)",
    transparentDark: "rgb(0, 0, 0, 0.8)",
    red: "#ff4444",
  },
};

const darkTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    darkPrimary: "rgb(0, 54, 141)",
    darkPrimaryRGB: "0, 54, 141",
    primary: "#3b82f6",
    lightPrimary: "#2563eb",
    light: "#fff",
    background: "#222",
    text: "#fff",
    cardBackground: "#1e1e2f",
    disabled: "#4b5563",
    transparentWhite: "rgba(255, 255, 255, 0.8)",
    lightTransparentWhite: "rgba(255, 255, 255, 0.5)",
    transparentGray: "rgb(110, 110, 110)",
    lightTransparentGray: "rgb(72, 72, 72)",
    transparentDark: "rgba(0, 0, 0, 0.8)",
    red: "#ff4444",
  },
};

export { lightTheme, darkTheme };
