import Lottie from "react-lottie-player";
import programmingLottieAnimation from "../../assets/programming_computer.json";
import { Box, Flex, FlexColumn, FlexRow, Text } from "../../components";

export function HomePage() {
  return (
    <Flex flex={1} justifyContent={"space-around"} alignItems={"flex-start"}>
      <FlexRow marginTop={"2rem"} justifyContent={"center"} alignItems={"center"}>
        <FlexColumn justifyContent={"center"}>
          <Text variant={"title"} color={"light"}>
            Hello, I&apos;m Gabriel Silva
          </Text>
          <Text variant={"thinTitle"} color={"light"}>
            Backend Software Developer
          </Text>
        </FlexColumn>

        <Lottie
          animationData={programmingLottieAnimation}
          play
          loop
          style={{
            display: "flex",
            width: "600px",
          }}
        />
      </FlexRow>
    </Flex>
  );
}
