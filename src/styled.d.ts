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
  lightGray: Color;
}

export interface Color {
  main: string;
  contrast?: string;
}

export interface FontVariants {
  title: string;
  subtitle: string;
  body: string;
  thinTitle: string;
}

export type FontWeights = Record<keyof FontVariants, string>;

export interface ButtonSize {
  fontSize: string;
  padding: string;
}

export interface ButtonSizes {
  sm: ButtonSize;
  md: ButtonSize;
  lg: ButtonSize;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string[];
    colors: Palette;
    fonts: FontVariants;
    fontSizes: FontVariants;
    fontWeights: FontWeights;
    buttonSizes: ButtonSizes;
    headerHeight: string;
  }
}
