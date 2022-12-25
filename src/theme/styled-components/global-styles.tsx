import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.join()}
  }
`;
