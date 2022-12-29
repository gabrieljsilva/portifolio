import { CSSProperties, ReactNode } from "react";
import Styled from "styled-components";

type StyledContainerProps = CSSProperties & {
  children?: ReactNode;
};

function StyledContainer({ children, ...css }: StyledContainerProps) {
  return <div style={css}>{children}</div>;
}

export const Container = Styled(StyledContainer).attrs(({ ...styles }) => {
  return { style: styles };
})``;
