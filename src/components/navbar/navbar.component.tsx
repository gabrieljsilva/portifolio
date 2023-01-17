import { NavbarItem, NavbarItemProps } from "./fragments";
import { Stack } from "@mui/material";

interface NavbarProps {
  items: NavbarItemProps[];
}

export function Navbar({ items }: NavbarProps) {
  const topBarNavigationHeight = "3.5em";

  return (
    <Stack
      direction={"row"}
      width={"100%"}
      height={topBarNavigationHeight}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {items.map((item) => (
        <NavbarItem key={item.key} name={item.name} path={item.path} active={item.active} />
      ))}
    </Stack>
  );
}
