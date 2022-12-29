import Styled from "styled-components";
import type { FontVariants, Palette } from "../../styled";
import { CSSProperties } from "react";
import { applyCssProperty } from "../../utils";

const DEFAULT_FONT_SIZE = "2.5rem";
const DEFAULT_FONT_WEIGHT = "500";

interface TextProps {
  variant?: keyof FontVariants;
  color?: keyof Palette;
  textDecoration?: string;
  textShadow?: CSSProperties["textShadow"];
  boxShadow?: CSSProperties["boxShadow"];
  backgroundColor?: CSSProperties["backgroundColor"];
  textAlign?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
  margin?: CSSProperties["margin"];
  marginTop?: CSSProperties["marginTop"];
  marginBottom?: CSSProperties["marginBottom"];
  marginLeft?: CSSProperties["marginLeft"];
  marginRight?: CSSProperties["marginRight"];
}

export const Text = Styled.h1<TextProps>`
    color: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.primary.main)};
    font-size: ${({ variant, theme }) => (variant ? theme.fontSizes[variant] : DEFAULT_FONT_SIZE)};
    font-weight: ${({ variant, theme }) => (variant ? theme.fontWeights[variant] : DEFAULT_FONT_WEIGHT)};
    text-decoration: ${({ textDecoration }) => textDecoration ?? "none"};
    font-family: ${({ variant, theme }) => (variant ? theme.fonts[variant] : "parent")};
    ${applyCssProperty("textShadow")}
    ${applyCssProperty("boxShadow")}
    ${applyCssProperty("backgroundColor")}
    ${applyCssProperty("textAlign")}
    ${applyCssProperty("lineHeight")}
    ${applyCssProperty("margin")}
    ${applyCssProperty("marginTop")}
    ${applyCssProperty("marginBottom")}
    ${applyCssProperty("marginLeft")}
    ${applyCssProperty("marginRight")}
`;
