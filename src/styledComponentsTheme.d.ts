// styled.d.ts (or styled-components.d.ts) in the src folder
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkPrimary: string;
      darkPrimaryRGB: string;
      primary: string;
      lightPrimary: string;
      light: string;
      background: string;
      text: string;
      cardBackground: string;
      disabled: string;
      transparentWhite: string,
      lightTransparentWhite: string,
      transparentGray: string;
      lightTransparentGray: string;
      transparentDark: string,
      red: string,
    };
    breakPoints: {
      tablet: string,
      mobileLG: string,
      mobileM: string
    }
  }
}
