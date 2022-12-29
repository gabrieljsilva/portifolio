import { Box, Flex, Text } from "../../components";
import Lottie from "react-lottie-player";
import rocketLottieAnimation from "../../assets/rocket-animation.json";

export function HomePage() {
  return (
    <Box padding={"16px"}>
      <Flex width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text variant={"title"} color={"light"}>
            Hello, I&apos;m Gabriel Silva
          </Text>
          <Text variant={"thinTitle"} color={"light"}>
            And I&apos;m a Backend Software Developer
          </Text>
        </Box>
        <Lottie
          loop
          play
          style={{
            width: 400,
            height: 400,
            opacity: "0.75",
          }}
          animationData={rocketLottieAnimation}
        />
      </Flex>
    </Box>
  );
}
