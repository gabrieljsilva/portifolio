import styled from "styled-components";

export interface ContainerProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderBottom?: string;
  borderColor?: string;
  backgroundColor?: string;
  background?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width ?? "initial"};
  height: ${({ height }) => height ?? "initial"};
  min-width: ${({ minWidth }) => minWidth ?? "initial"};
  min-height: ${({ minHeight }) => minHeight ?? "initial"};
  height: ${({ height }) => height ?? "initial"};
  padding: ${({ padding }) => padding ?? "initial"};
  margin: ${({ margin }) => margin ?? "initial"};
  border: ${({ border }) => border ?? "initial"};
  border-bottom: ${({ borderBottom }) => borderBottom ?? "initial"};
  border-color: ${({ borderColor }) => borderColor ?? "initial"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "initial"};
  background: ${({ background }) => background ?? "initial"};
`;
