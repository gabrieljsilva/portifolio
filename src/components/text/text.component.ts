import Styled from "styled-components";
import type { FontVariants } from "../../styled";

const DEFAULT_FONT_SIZE = "2.5rem";
const DEFAULT_FONT_WEIGHT = "500";

interface TextProps {
  variant?: keyof FontVariants;
  color?: string;
}

export const Text = Styled.h1<TextProps>`
    color: ${({ color, theme }) => color || theme.colors.primary.main};
    font-size: ${({ variant, theme }) => (variant ? theme.fontSizes[variant] : DEFAULT_FONT_SIZE)};
    font-weight: ${({ variant, theme }) => (variant ? theme.fontWeights[variant] : DEFAULT_FONT_WEIGHT)};
`;
