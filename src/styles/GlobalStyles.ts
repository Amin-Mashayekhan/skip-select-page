import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  $darkMode: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    transition: background 0.3s ease, color 0.3s ease;
  }

  html {
    font-size: 16px;
  }

  @media (max-width:  ${({ theme }) => theme.breakPoints.mobileM}) {
    html {
      font-size: 14px;
    }
  }
`;