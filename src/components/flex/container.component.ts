import styled from "styled-components";

export interface ContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width ?? "initial"};
  height: ${({ height }) => height ?? "initial"};
`;
