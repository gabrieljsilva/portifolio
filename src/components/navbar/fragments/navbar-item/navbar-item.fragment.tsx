import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

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
          <Typography
            sx={{ textShadow: active ? activeStyle : undefined }}
            color={"white"}
            fontFamily={"Nunito"}
            fontWeight={"900"}
          >
            {name}
          </Typography>
        </Button>
      </Stack>
    </Link>
  );
}
