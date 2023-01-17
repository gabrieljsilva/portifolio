import { Link } from "react-router-dom";
import { Text } from "../../../text";
import { Button, Stack } from "@mui/material";

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
      <Stack margin={"0px 8px"} padding={"8px 0"}>
        <Button variant={"text"}>
          <Text textShadow={active ? activeStyle : undefined} color={"light"} variant={"menuItem"}>
            {name}
          </Text>
        </Button>
      </Stack>
    </Link>
  );
}
