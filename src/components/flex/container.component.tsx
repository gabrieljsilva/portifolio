import Styled from "styled-components";
import { CSSProperties, ReactNode } from "react";

type ContainerProps = Partial<CSSProperties> & {
  children?: ReactNode | ReactNode[];
};

export const StyledContainer = Styled.div<any>`
    ${({ children, ...styles }) => ({ ...styles })}
`;

export function Container({ children, ...styles }: ContainerProps) {
  return <StyledContainer {...styles}>{children}</StyledContainer>;
}
