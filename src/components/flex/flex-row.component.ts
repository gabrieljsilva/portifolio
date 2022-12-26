import Styled from "styled-components";
import { Flex, FlexProps } from "./flex.component";

export const FlexRow = Styled(Flex)<Omit<FlexProps, "direction">>`
  flex-direction: row
`;
