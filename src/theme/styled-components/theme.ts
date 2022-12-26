import type { ButtonSizes, FontWeights, Palette } from "../../styled";
import { DefaultTheme } from "styled-components";
import { FontVariants } from "../../styled";

export class Theme implements DefaultTheme {
  public fontFamily: string[];
  public colors: Palette;
  public fonts: FontVariants;
  public fontSizes: FontVariants;
  public fontWeights: FontWeights;
  public buttonSizes: ButtonSizes;
  public headerHeight: string;

  constructor(theme: DefaultTheme) {
    this.fontFamily = theme.fontFamily;
    this.colors = theme.colors;
    this.fonts = theme.fonts;
    this.fontSizes = theme.fontSizes;
    this.fontWeights = theme.fontWeights;
    this.buttonSizes = theme.buttonSizes;
    this.headerHeight = theme.headerHeight;
  }
}
