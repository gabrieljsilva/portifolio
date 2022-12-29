import { Link } from "react-router-dom";
import { Flex } from "../../../flex";
import { Text } from "../../../text";
import { ButtonLink } from "../../../button";

export interface NavbarItemProps {
  key: string;
  name: string;
  path: string;
  active: boolean;
}

export function NavbarItem({ name, path, active }: NavbarItemProps) {
  const activeStyle = "rgba(229,125,250,0.9) 0px 0px 20px";

  return (
    <Link to={path}>
      <Flex margin={"0px 8px"} padding={"8px 0"}>
        <ButtonLink>
          <Text textShadow={active ? activeStyle : undefined} color={"light"} variant={"menuItem"}>
            {name}
          </Text>
        </ButtonLink>
      </Flex>
    </Link>
  );
}
