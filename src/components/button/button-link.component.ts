import Styled from "styled-components";
import { Button } from "./button.component";

export const ButtonLink = Styled(Button)`
  background-color: transparent;
  color: ${({ theme, color }) => (color ? theme.colors[color].main : theme.colors.light.main)};
  cursor: pointer;
`;
