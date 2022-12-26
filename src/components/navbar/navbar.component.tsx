import { useLocation } from "react-router-dom";
import { Flex } from "../flex";
import { NavbarItem, NavbarItemProps } from "./fragments";
import { useTheme } from "styled-components";

interface NavbarProps {
  items: Array<Omit<NavbarItemProps, "active">>;
}

export function Navbar({ items }: NavbarProps) {
  const location = useLocation();
  const theme = useTheme();

  return (
    <Flex width={"100%"} height={theme.headerHeight} justifyContent={"center"} alignItems={"center"}>
      {items.map((item) => (
        <NavbarItem key={item.key} name={item.name} path={item.path} active={location.pathname === item.path} />
      ))}
    </Flex>
  );
}
