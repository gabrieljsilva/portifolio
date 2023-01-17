import { Row } from "../flex";
import { NavbarItem, NavbarItemProps } from "./fragments";
import { useTheme } from "styled-components";

interface NavbarProps {
  items: NavbarItemProps[];
}

export function Navbar({ items }: NavbarProps) {
  const theme = useTheme();

  return (
    <Row width={"100%"} height={theme.topBarNavigationHeight} justifyContent={"center"} alignItems={"center"}>
      {items.map((item) => (
        <NavbarItem key={item.key} name={item.name} path={item.path} active={item.active} />
      ))}
    </Row>
  );
}
