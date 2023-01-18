import { Outlet } from "react-router-dom";
import { AnimatedParticles, Navbar } from "../../components";
import { useNavbar, useParticles } from "../../hooks";
import { publicMenuItems } from "./domain";
import { FadeInOutTransition } from "../../transitions";
import { Stack, Box } from "@mui/material";

export function PublicLayout() {
  const navbar = useNavbar(publicMenuItems);
  const particles = useParticles({
    style: { position: "fixed", top: "0", maxWidth: "100vw", filter: "blur(1px)" },
  });
  const linearGradiantOpacity = "0.85";
  const linearGradiantColor1 = `rgba(38,30,30,${linearGradiantOpacity})`;
  const linearGradiantColor2 = `rgba(20,17,34,${linearGradiantOpacity})`;
  const linearGradiantColor3 = `rgba(75,0,84,${linearGradiantOpacity})`;
  const linearGradientBackGround = `linear-gradient(345deg, ${linearGradiantColor1} 0%, ${linearGradiantColor2} 52%, ${linearGradiantColor3} 100%)`;

  return (
    <Stack minHeight={"100vh"}>
      <Stack alignItems={"center"} flex={1}>
        <Stack flex={1} width={"100%"} maxWidth={"1920px"} position={"relative"} zIndex={2}>
          <Navbar {...navbar} />
          <Outlet />
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
          backgroundImage: `${linearGradientBackGround}, url(/portifolio/bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </Stack>
  );
}
