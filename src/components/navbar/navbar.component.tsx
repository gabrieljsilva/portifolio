import { NavbarItem, NavbarItemProps } from "./fragments";
import { useTheme } from "styled-components";
import { Stack } from "@mui/material";

interface NavbarProps {
  items: NavbarItemProps[];
}

export function Navbar({ items }: NavbarProps) {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      width={"100%"}
      height={theme.topBarNavigationHeight}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {items.map((item) => (
        <NavbarItem key={item.key} name={item.name} path={item.path} active={item.active} />
      ))}
    </Stack>
  );
}
