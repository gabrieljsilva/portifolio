import { BottomNavigationAction, BottomNavigation as MuiBottomNavigation } from "@mui/material";
import { BadgeOutlined, Done, Home, Person, Star } from "@mui/icons-material";
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
        label={"Home"}
        icon={<Home fontSize={"small"} />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/about"}
        label={"About"}
        icon={<Person />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/skills"}
        label={"Skills"}
        icon={<Star />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/cases"}
        label={"Cases"}
        icon={<Done />}
      />
      <BottomNavigationAction
        sx={{ color: "white", minWidth: "60px" }}
        value={"/experiences"}
        label={"Experiences"}
        icon={<BadgeOutlined />}
      />
    </MuiBottomNavigation>
  );
}
