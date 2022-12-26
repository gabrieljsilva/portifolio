import { Flex } from "../flex";
import { NavbarItem, NavbarItemProps } from "./fragments";
import { useLocation } from "react-router-dom";
interface NavbarProps {
  items: Array<Omit<NavbarItemProps, "active">>;
}

export function Navbar({ items }: NavbarProps) {
  const location = useLocation();

  return (
    <Flex width={"100%"} justifyContent={"center"}>
      {items.map((item) => (
        <NavbarItem key={item.key} name={item.name} path={item.path} active={location.pathname === item.path} />
      ))}
    </Flex>
  );
}
