import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatedParticles, Navbar } from "../../components";
import { useNavbar, useParticles } from "../../hooks";
import { publicMenuItems } from "./domain";
import { FadeInOutTransition } from "../../transitions";
import { Stack, Box, useTheme, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { BadgeOutlined, Done, Home, Person, Star } from "@mui/icons-material";

export function PublicLayout() {
  const theme = useTheme();
  const navbar = useNavbar(publicMenuItems);
  const particles = useParticles({
    style: { position: "fixed", top: "0", maxWidth: "100vw", filter: "blur(1px)" },
  });
  const linearGradiantOpacity = "0.85";
  const linearGradiantColor1 = `rgba(38,30,30,${linearGradiantOpacity})`;
  const linearGradiantColor2 = `rgba(20,17,34,${linearGradiantOpacity})`;
  const linearGradiantColor3 = `rgba(75,0,84,${linearGradiantOpacity})`;
  const linearGradientBackGround = `linear-gradient(345deg, ${linearGradiantColor1} 0%, ${linearGradiantColor2} 52%, ${linearGradiantColor3} 100%)`;

  const location = useLocation();
  const navigate = useNavigate();
  const activeItem = location.pathname;

  return (
    <Stack minHeight={"100vh"}>
      <Stack alignItems={"center"} flex={1}>
        <Stack flex={1} width={"100%"} maxWidth={"1920px"} position={"relative"} zIndex={2}>
          <Box
            sx={{
              [theme.breakpoints.only("xs")]: {
                display: "none",
              },
            }}
          >
            <Navbar {...navbar} />
          </Box>

          <Box
            sx={{
              [theme.breakpoints.only("xs")]: {
                pb: 12,
                pt: 2,
              },
            }}
          >
            <Outlet />
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              [theme.breakpoints.up("sm")]: {
                display: "none",
              },
            }}
          >
            <BottomNavigation
              sx={{
                background: "rgba(10, 10, 10, .85)",
              }}
              showLabels
              value={activeItem}
              onChange={(_, path) => {
                return navigate(path);
              }}
            >
              <BottomNavigationAction sx={{ color: "white" }} value={"/"} label={"Home"} icon={<Home />} />
              <BottomNavigationAction sx={{ color: "white" }} value={"/about"} label={"About"} icon={<Person />} />
              <BottomNavigationAction sx={{ color: "white" }} value={"/skills"} label={"Skills"} icon={<Star />} />
              <BottomNavigationAction sx={{ color: "white" }} value={"/cases"} label={"Cases"} icon={<Done />} />
              <BottomNavigationAction
                sx={{ color: "white" }}
                value={"/experiences"}
                label={"Experiences"}
                icon={<BadgeOutlined />}
              />
            </BottomNavigation>
          </Box>
        </Stack>
      </Stack>

      <Box position={"relative"} zIndex={1}>
        <FadeInOutTransition>
          <AnimatedParticles {...particles} />
        </FadeInOutTransition>
      </Box>

      <Box
        zIndex={0}
        position={"fixed"}
        width={"100%"}
        minHeight={"100vh"}
        top={"0"}
        sx={{
          backgroundImage: `${linearGradientBackGround}, url(/images/backgrounds/bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </Stack>
  );
}
