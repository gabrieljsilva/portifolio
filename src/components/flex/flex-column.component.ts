import Styled from "styled-components";
import { Flex, FlexProps } from "./flex.component";

export const FlexColumn = Styled(Flex)<Omit<FlexProps, "direction">>`
  flex-direction: column
`;
