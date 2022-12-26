import { Flex } from "../../flex";
import { Text } from "../../text";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../button";
import { useTheme } from "styled-components";
import { Container } from "../../flex/container.component";

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
          <Container borderBottom={active ? `1px solid ${theme.colors.primary.main}` : undefined}>
            <Text variant={"body"}>{name}</Text>
          </Container>
        </ButtonLink>
      </Flex>
    </Link>
  );
}
