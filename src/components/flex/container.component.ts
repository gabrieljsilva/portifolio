import styled from "styled-components";

export interface ContainerProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderBottom?: string;
  borderColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width ?? "initial"};
  height: ${({ height }) => height ?? "initial"};
  padding: ${({ padding }) => padding ?? "initial"};
  margin: ${({ margin }) => margin ?? "initial"};
  border: ${({ border }) => border ?? "initial"};
  border-bottom: ${({ borderBottom }) => borderBottom ?? "initial"};
  border-color: ${({ borderColor }) => borderColor ?? "initial"};
`;
