import Styled from "styled-components";
import { Button } from "./button.component";

export const ButtonOutline = Styled(Button)`
  background-color: transparent;
  color: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.primary.main)};
  border-color: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.primary.main)};
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  &:hover {
    text-shadow: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.primary.main)} 0px 0px 20px;
    box-shadow: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.primary.main)} 0px 0px 20px;
  }
`;
