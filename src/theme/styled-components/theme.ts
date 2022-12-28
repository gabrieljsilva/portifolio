import type { ButtonSizes, FontWeights, Palette } from "../../styled";
import { DefaultTheme } from "styled-components";
import { FontVariants } from "../../styled";

export class ThemeProps {
  public fontFamily!: string[];
  public colors!: Palette;
  public fonts!: FontVariants;
  public fontSizes!: FontVariants;
  public fontWeights!: FontWeights;
  public buttonSizes!: ButtonSizes;
  public topBarNavigationHeight!: string;
}

export class Theme extends ThemeProps implements DefaultTheme {
  constructor(theme: ThemeProps) {
    super();
    this.fontFamily = theme.fontFamily;
    this.colors = theme.colors;
    this.fonts = theme.fonts;
    this.fontSizes = theme.fontSizes;
    this.fontWeights = theme.fontWeights;
    this.buttonSizes = theme.buttonSizes;
    this.topBarNavigationHeight = theme.topBarNavigationHeight;
  }

  getRemainingScreenHeight() {
    return `calc(100vh - ${this.topBarNavigationHeight})`;
  }
}
