import Styled from "styled-components";
import type { FontVariants } from "../../styled";

const DEFAULT_FONT_SIZE = "2.5rem";
const DEFAULT_FONT_WEIGHT = "500";

interface TitleProps {
  variant?: keyof FontVariants;
  color?: string;
}

export const Title = Styled.h1<TitleProps>`
    color: ${({ color, theme }) => color || theme.colors.primary.main};
    font-size: ${({ variant, theme }) => (variant ? theme.fontSizes[variant] : DEFAULT_FONT_SIZE)};
    font-weight: ${({ variant, theme }) => (variant ? theme.fontWeights[variant] : DEFAULT_FONT_WEIGHT)};
`;
