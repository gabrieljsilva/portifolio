import Styled from "styled-components";
import { Container } from "../../../flex/container.component";

export const NavbarItemAnimatedContainer = Styled(Container)`
    display: inline-block;
   
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.light.main};
      transition: width .3s;
    }
    
    &:hover::after {
      width: 100%;
    }
`;
