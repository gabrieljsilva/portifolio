import Lottie from "react-lottie-player";
import programmingLottieAnimation from "../../assets/programming_computer.json";
import { Box, ButtonOutline, Flex, FlexColumn, FlexRow, Text } from "../../components";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <FlexColumn width={"100%"} padding={"0 2rem"}>
      <Flex flex={1} justifyContent={"space-between"} alignItems={"flex-start"} width={"100%"}>
        <FlexRow marginTop={"1rem"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
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
              height: "20%",
            }}
          />
        </FlexRow>
      </Flex>
      <Flex padding={"0 7rem"} justifyContent={"space-around"}>
        <FlexColumn
          position={"relative"}
          marginBottom={"5rem"}
          padding={"2rem"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"100%"}
          height={"10rem"}
          background={"rgba(10, 10, 10, .50)"}
          borderRadius={"8px"}
        >
          <Text textAlign={"center"} color={"light"} variant={"body"}>
            I&apos;ve been a programmer for over <strong> 3 years </strong>and I have extensive experience in the
            Javascript ecosystem. I worked on several types of projects, mainly focused on <strong> Health </strong> and
            <strong> R&S. </strong>
          </Text>

          <Box position={"absolute"} bottom={0}>
            <Link to={"/about"}>
              <ButtonOutline>More About Me</ButtonOutline>
            </Link>
          </Box>
        </FlexColumn>
      </Flex>
    </FlexColumn>
  );
}
