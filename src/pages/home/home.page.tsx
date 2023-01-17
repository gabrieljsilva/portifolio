import Lottie from "react-lottie-player";
import programmingLottieAnimation from "../../assets/programming_computer.json";
import { ButtonOutline, Row, FlexRow, GlassedCard } from "../../components";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

export function HomePage() {
  return (
    <Stack width={"100%"} padding={"0 2rem"}>
      <Row flex={1} justifyContent={"space-between"} alignItems={"flex-start"} width={"100%"}>
        <FlexRow marginTop={"1rem"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
          <Stack justifyContent={"center"}>
            <Typography variant={"h1"} color={"white"}>
              Hello, I&apos;m Gabriel Silva
            </Typography>
            <Typography variant={"subtitle1"} color={"white"}>
              Backend Software Developer
            </Typography>
          </Stack>

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
      </Row>
      <Row padding={"0 7rem"} justifyContent={"space-around"}>
        <GlassedCard>
          <Stack alignItems={"center"} gap={5}>
            <Typography textAlign={"center"} color={"white"} variant={"body1"}>
              I&apos;ve been a programmer for over <strong> 3 years </strong>and I have extensive experience in the
              Javascript ecosystem. I worked on several types of projects, mainly focused on <strong> Health </strong>{" "}
              and
              <strong> R&S. </strong>
            </Typography>

            <Link to={"/about"}>
              <ButtonOutline>More About Me</ButtonOutline>
            </Link>
          </Stack>
        </GlassedCard>
      </Row>
    </Stack>
  );
}
