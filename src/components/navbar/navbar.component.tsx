import { NavbarItem, NavbarItemProps } from "./fragments";
import { Stack } from "@mui/material";
import { NAVBAR_HEIGHT } from "../../constants";

interface NavbarProps {
  items: NavbarItemProps[];
}

export function Navbar({ items }: NavbarProps) {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      height={NAVBAR_HEIGHT}
      mb={2}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      {items.map((item) => (
        <NavbarItem key={item.key} name={item.name} path={item.path} active={item.active} />
      ))}
    </Stack>
  );
}
