import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import Lottie from "react-lottie-player";
import programmingLottieAnimation from "../../assets/programming_computer.json";
import { ButtonOutline, GlassedCard } from "../../components";
import { Link } from "react-router-dom";

export function HomePage() {
  const theme = useTheme();

  return (
    <Stack width={"100%"} padding={"0 2rem"}>
      <Grid container alignItems={"center"}>
        <Grid item flex={1}>
          <Stack
            sx={{
              [theme.breakpoints.down("lg")]: {
                alignItems: "center",
              },
            }}
          >
            <Typography variant={"h1"} color={"white"}>
              Hello, I&apos;m Gabriel Silva
            </Typography>
            <Typography variant={"subtitle1"} color={"white"}>
              Backend Software Developer
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          justifySelf={"flex-end"}
          sx={{
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
          }}
        >
          <Lottie
            animationData={programmingLottieAnimation}
            play
            loop
            style={{
              display: "flex",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>

      <Box padding={"0 7rem"}>
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
      </Box>
    </Stack>
  );
}
