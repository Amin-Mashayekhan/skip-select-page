import { keyframes, css } from "styled-components";
import { lightTheme } from "./theme";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const scaleOpacityAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`;

const blueShadowAnimation = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 0 0 rgba(${lightTheme.colors.darkPrimaryRGB}, 0.4),
      0 0 0 0 rgba(${lightTheme.colors.darkPrimaryRGB}, 0.3),
      0 0 5px 3px ${lightTheme.colors.darkPrimary};
  }
  50% {
    box-shadow: 
      0 0 10px 5px rgba(${lightTheme.colors.darkPrimaryRGB}, 0),
      0 0 20px 10px rgba(${lightTheme.colors.darkPrimaryRGB}, 0.1),
      0 0 5px 3px ${lightTheme.colors.darkPrimary};
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
  }
`;

// Reusable animation styles
export const animations = {
  spin: css`
    animation: ${spinAnimation} 1.2s ease infinite;
    will-change: transform;
  `,
  scaleOpacity: css`
    animation: ${scaleOpacityAnimation} 1.2s ease infinite;
    will-change: transform, opacity;
  `,
  blueShadow: css`
    animation: ${blueShadowAnimation} 2.1s ease-in-out infinite;
    will-change: box-shadow;
  `,
  pulse: css`
    animation: ${pulse} 1.5s infinite;
  `,
};
