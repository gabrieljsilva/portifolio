import Styled from "styled-components";
import { Box } from "../../../box";

export const NavbarItemAnimatedContainer = Styled(Box)`
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
