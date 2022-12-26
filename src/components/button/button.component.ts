import Styled from "styled-components";
import { ButtonSizes, Palette } from "../../styled";

interface ButtonProps {
  size?: keyof ButtonSizes;
  color?: keyof Palette;
}

export const Button = Styled.button<ButtonProps>`
  font-size: ${({ theme, size }) => (size ? theme.buttonSizes[size].fontSize : theme?.buttonSizes?.md?.fontSize)};
  padding: ${({ theme, size }) => (size ? theme.buttonSizes[size].padding : theme?.buttonSizes?.md?.padding)};
  background-color: ${({ color, theme }) => (color ? theme.colors[color].main : theme.colors.primary.main)};
  color: ${({ color, theme }) => (color ? theme.colors[color].contrast : theme.colors.primary.contrast)};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  height: 40px;
  min-width: 80px;
  &:hover {
    filter: brightness(80%);
    transition: 0.25s;
  }
`;
