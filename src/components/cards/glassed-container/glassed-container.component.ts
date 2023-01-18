import Styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const GlassedContainer = Styled(Stack)`
  background: rgba(10, 10, 10, .50);
  padding: 2rem;
  border-radius: 8px;
  transition: 0.75s;
  &:hover {
    background: rgba(10, 10, 10, .85);
  }
`;
