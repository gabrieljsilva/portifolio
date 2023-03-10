import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import { differenceInYears } from "date-fns";
import { GlassedContainer } from "../../components";
import programmingLottieAnimation from "../../assets/programming_computer.json";

export function HomePage() {
  const theme = useTheme();
  const startProgrammingDate = new Date("2019-07-01");
  const totalExperienceYears = differenceInYears(new Date(Date.now()), startProgrammingDate);

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
              Olá, Eu sou Gabriel Silva
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
              Fullstack Software Developer
            </Typography>
          </Stack>
        </Grid>
        <Grid item justifySelf={"flex-end"} justifyContent={"center"} sm={12} md={4} lg={6}>
          <Lottie
            animationData={programmingLottieAnimation}
            play
            loop
            style={{
              display: "flex",
              margin: "auto",
              maxWidth: "600px",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>

      <Box>
        <GlassedContainer>
          <Stack alignItems={"center"} gap={5}>
            <Typography textAlign={"center"} color={"white"} variant={"body1"}>
              E aí! Meu nome é <strong> Gabriel de Jesus Silva</strong>. Eu sou programador há mais de
              <strong> {totalExperienceYears} anos</strong>. Eu tenho ampla experiência no ecossistema{" "}
              <strong> Javascript</strong>. Eu já trabalhei em vários tipos de projetos, principalmentos voltados para a
              área de <strong> Saúde </strong> e<strong> R&S. </strong>
            </Typography>

            <Link to={"/about"}>
              <Button variant={"outlined"}>Veja mais sobre mim</Button>
            </Link>
          </Stack>
        </GlassedContainer>
      </Box>
    </Stack>
  );
}
