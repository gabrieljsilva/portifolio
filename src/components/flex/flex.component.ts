import Styled, { CSSProperties } from "styled-components";
import { applyCssProperty } from "../../utils";
import { Box, BoxProps } from "../box";

export interface FlexComponentProps extends BoxProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flex?: CSSProperties["flex"];
  gap?: CSSProperties["gap"];
  alignSelf?: CSSProperties["alignSelf"];
  justifySelf?: CSSProperties["justifySelf"];
}

export const Flex = Styled(Box)<FlexComponentProps>`
    display: flex;
    ${applyCssProperty("flexDirection")}
    ${applyCssProperty("justifyContent")}
    ${applyCssProperty("alignItems")}
    ${applyCssProperty("flex")}
    ${applyCssProperty("gap")}
    ${applyCssProperty("alignSelf")}
    ${applyCssProperty("justifySelf")}
`;
