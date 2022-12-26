import Styled from "styled-components";
import type { FontVariants, Palette } from "../../styled";

const DEFAULT_FONT_SIZE = "2.5rem";
const DEFAULT_FONT_WEIGHT = "500";

interface TextProps {
  variant?: keyof FontVariants;
  color?: keyof Palette;
  textDecoration?: string;
}

export const Text = Styled.h1<TextProps>`
    color: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.primary.main)};
    font-size: ${({ variant, theme }) => (variant ? theme.fontSizes[variant] : DEFAULT_FONT_SIZE)};
    font-weight: ${({ variant, theme }) => (variant ? theme.fontWeights[variant] : DEFAULT_FONT_WEIGHT)};
    text-decoration: ${({ textDecoration }) => textDecoration ?? "none"};
`;
