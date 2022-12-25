import type { Palette } from "../../styled";
import { DefaultTheme } from "styled-components";

export class Theme implements DefaultTheme {
  public fontFamily: string[];
  public colors: Palette;

  constructor(theme: DefaultTheme) {
    this.fontFamily = theme.fontFamily;
    this.colors = theme.colors;
  }
}
