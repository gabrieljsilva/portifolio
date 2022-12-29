import { Outlet } from "react-router-dom";
import { AnimatedParticles, Navbar, Box, FlexColumn } from "../../components";
import { useNavbar, useParticles } from "../../hooks";
import { publicMenuItems } from "./domain";
import { FadeInOutTransition } from "../../transitions";

export function PublicLayout() {
  const navbar = useNavbar(publicMenuItems);
  const particles = useParticles({
    style: { position: "fixed", top: "0", maxWidth: "100vw" },
  });
  const linearGradiantOpacity = "0.85";
  const linearGradientBackGround = `linear-gradient(345deg, rgba(38,30,30,${linearGradiantOpacity}) 0%, rgba(20,17,34,${linearGradiantOpacity}) 52%, rgba(75,0,84,${linearGradiantOpacity}) 100%)`;

  return (
    <FlexColumn>
      <FlexColumn minHeight={"100vh"} position={"relative"} zIndex={2}>
        <Navbar {...navbar} />
        <Outlet />
      </FlexColumn>

      <Box position={"relative"} zIndex={1}>
        <FadeInOutTransition>
          <AnimatedParticles {...particles} />
        </FadeInOutTransition>
      </Box>

      <Box
        zIndex={0}
        position={"fixed"}
        backgroundImage={`${linearGradientBackGround}, url(/portifolio/bg.jpg)`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        width={"100%"}
        minHeight={"100vh"}
        top={"0"}
      />
    </FlexColumn>
  );
}
