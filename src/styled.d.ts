// styled.d.ts
import "styled-components";

export interface Palette {
  light: Color;
  primary: Color;
  secondary: Color;
  success: Color;
  danger: Color;
  warning: Color;
  info: Color;
  grayscale: Grayscale;
}

export interface Color {
  main: string;
  contrast?: string;
}

export interface Grayscale {
  G10: string;
  G20: string;
  G30: string;
  G40: string;
  G50: string;
  G60: string;
  G70: string;
  G80: string;
  G90: string;
}

export interface FontVariants {
  title: string;
  subtitle: string;
  body: string;
  thinTitle: string;
}

export type FontWeights = Record<keyof FontVariants, string>;

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string[];
    colors: Palette;
    fonts: FontVariants;
    fontSizes: FontVariants;
    fontWeights: FontWeights;
  }
}
