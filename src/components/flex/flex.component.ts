import Styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";

export type FlexComponentProps = BoxProps;
export const Row = Styled(Box)<FlexComponentProps>`
    display: flex;
`;
