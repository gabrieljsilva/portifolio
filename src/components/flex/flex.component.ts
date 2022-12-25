import Styled from "styled-components";
import { Container, ContainerProps } from "./container.component";

interface FlexProps extends ContainerProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
}

export const Flex = Styled(Container)<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "initial"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "initial"};
  align-items: ${({ alignItems }) => alignItems ?? "initial"}
`;
