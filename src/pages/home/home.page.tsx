import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import Lottie from "react-lottie-player";
import programmingLottieAnimation from "../../assets/programming_computer.json";
import { GlassedContainer } from "../../components";
import { Link } from "react-router-dom";

export function HomePage() {
  const theme = useTheme();

  return (
    <Stack width={"100%"} flex={1} px={"2rem"} pb={"5rem"}>
      <Grid height={"100%"} container alignItems={"center"}>
        <Grid item flex={1} sm={12} md={8} lg={6}>
          <Stack
            sx={{
              [theme.breakpoints.down("md")]: {
                alignItems: "center",
              },
              [theme.breakpoints.up("md")]: {
                paddingLeft: "5rem",
              },
            }}
          >
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "1.75rem",
                  textAlign: "center",
                },
              }}
              variant={"h1"}
              color={"white"}
            >
              Hello, I&apos;m Gabriel Silva
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "1.50rem",
                  textAlign: "center",
                },
              }}
              variant={"subtitle1"}
              color={"white"}
            >
              Backend Software Developer
            </Typography>
          </Stack>
        </Grid>
        <Grid item justifySelf={"flex-end"} sm={12} md={4} lg={6}>
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

      <Box>
        <GlassedContainer>
          <Stack alignItems={"center"} gap={5}>
            <Typography textAlign={"center"} color={"white"} variant={"body1"}>
              I&apos;ve been a programmer for over <strong> 3 years </strong>and I have extensive experience in the
              Javascript ecosystem. I worked on several types of projects, mainly focused on <strong> Health </strong>{" "}
              and
              <strong> R&S. </strong>
            </Typography>

            <Link to={"/about"}>
              <Button variant={"outlined"}>See more about me</Button>
            </Link>
          </Stack>
        </GlassedContainer>
      </Box>
    </Stack>
  );
}
