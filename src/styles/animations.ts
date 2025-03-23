import { keyframes, css } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const scaleOpacityAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`;

// Reusable animation styles
export const animations = {
  spin: css`
    animation: ${spinAnimation} 1.2s ease infinite;
  `,
  scaleOpacity: css`
    animation: ${scaleOpacityAnimation} 1.2s ease infinite;
  `,
};
