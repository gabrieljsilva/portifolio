import Styled, { CSSProperties } from "styled-components";
import { applyCssProperty } from "../../utils";
import { Box, BoxProps } from "../box";

interface FlexComponentProps extends BoxProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flex?: CSSProperties["flex"];
}

export const Flex = Styled(Box)<FlexComponentProps>`
    display: flex;
    ${applyCssProperty("flexDirection")}
    ${applyCssProperty("justifyContent")}
    ${applyCssProperty("alignItems")}
    ${applyCssProperty("flex")}
`;
