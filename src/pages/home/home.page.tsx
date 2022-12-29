import { Flex, Text } from "../../components";
import Lottie from "react-lottie-player";
import rocketLottieAnimation from "../../assets/rocket-animation.json";
import { Container } from "../../components/flex/container.component";

export function HomePage() {
  return (
    <Flex width={"100%"} flexDirection={"column"} justifyContent={"space-between"}>
      <Container>
        <Text variant={"title"} color={"light"}>
          Hello, I&apos;m Gabriel Silva
        </Text>
        <Text variant={"thinTitle"} color={"light"}>
          Backend Software Developer
        </Text>
      </Container>
      <Lottie
        loop
        play
        style={{
          width: 400,
          height: 400,
          opacity: "0.75",
        }}
        animationData={rocketLottieAnimation}
      ></Lottie>
    </Flex>
  );
}
