import { Flex } from "../../../flex";
import { Text } from "../../../text";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../../button";
import { useTheme } from "styled-components";
import * as S from "./navbar-item.styles";

export interface NavbarItemProps {
  key: string;
  name: string;
  path: string;
  active: boolean;
}

export function NavbarItem({ name, path, active }: NavbarItemProps) {
  const theme = useTheme();

  return (
    <Link to={path}>
      <Flex margin={"0px 8px"} padding={"8px 0"}>
        <ButtonLink>
          <S.NavbarItemAnimatedContainer borderBottom={active ? `1px solid ${theme.colors.primary.main}` : undefined}>
            <Text color={"light"} variant={"menuItem"}>
              {name}
            </Text>
          </S.NavbarItemAnimatedContainer>
        </ButtonLink>
      </Flex>
    </Link>
  );
}
