import { BottomNavigationAction, BottomNavigation as MuiBottomNavigation } from "@mui/material";
import { BadgeOutlined, Done, GitHub, Home, Person, Star } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeItem = location.pathname;

  return (
    <MuiBottomNavigation
      showLabels
      sx={{
        background: "rgba(10, 10, 10, .85)",
        px: 2,
      }}
      value={activeItem}
      onChange={(_, path) => {
        return navigate(path);
      }}
    >
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/"}
        icon={<Home fontSize={"small"} />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/about"}
        label={"Sobre"}
        icon={<Person fontSize={"small"} />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/skills"}
        label={"Habilidades"}
        icon={<Star fontSize={"small"} />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/cases"}
        label={"Cases"}
        icon={<Done fontSize={"small"} />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/experiences"}
        label={"Experiências"}
        icon={<BadgeOutlined fontSize={"small"} />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/contributions"}
        icon={<GitHub fontSize={"small"} />}
      />
    </MuiBottomNavigation>
  );
}
