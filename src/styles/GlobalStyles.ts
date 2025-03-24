import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: #111;
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
  font-size: 16px; /* Default for normal screens */
}

@media (max-width: 450px) {
  html {
    font-size: 14px; /* Even smaller for mobile */
  }
}
`;

export default GlobalStyles;
