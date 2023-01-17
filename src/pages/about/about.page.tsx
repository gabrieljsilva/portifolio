import { useTheme } from "styled-components";
import { ButtonOutline, GlassedCard } from "../../components";
import { Link } from "react-router-dom";
import { Button, Grid, Stack, Typography } from "@mui/material";

export function AboutPage() {
  const theme = useTheme();

  return (
    <Grid
      container
      gap={"1rem"}
      alignItems={"center"}
      justifyContent={"space-around"}
      minHeight={theme.getRemainingScreenHeight()}
    >
      <Grid item>
        <GlassedCard maxWidth={"20rem"} width={"100%"} height={"20rem"}>
          <Typography
            textAlign={"center"}
            marginBottom={"1rem"}
            fontSize={"1.75rem"}
            fontWeight={"600"}
            variant={"h1"}
            color={"white"}
          >
            Who am I?
          </Typography>
          <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
            Hello, my name is Gabriel de Jesus Silva, I&apos;m 22 years old and I&apos;m from Salvador, Bahia, Brazil, I
            currently live in the interior of the state of Bahia, in the city of Senhor do Bonfim.
          </Typography>
        </GlassedCard>
      </Grid>

      <Grid item>
        <GlassedCard maxWidth={"20rem"} width={"100%"} height={"20rem"}>
          <Typography
            textAlign={"center"}
            marginBottom={"1rem"}
            fontSize={"1.75rem"}
            fontWeight={"600"}
            variant={"h1"}
            color={"white"}
          >
            When did I start programming?
          </Typography>
          <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
            I&apos;ve been a developer since 2018, when I joined a technical course in computer science at the Instituto
            Federal de Educação, Ciência e Tecnologia, which I graduated in 2019. In the same year I also joined the
            higher course in Computer Science in the same institute and completed 4 semesters.
          </Typography>
        </GlassedCard>
      </Grid>

      <Grid item>
        <GlassedCard maxWidth={"20rem"} width={"100%"} height={"20rem"}>
          <Typography
            textAlign={"center"}
            marginBottom={"1rem"}
            fontSize={"1.75rem"}
            fontWeight={"600"}
            variant={"h1"}
            color={"white"}
          >
            My first professional experiences
          </Typography>
          <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
            My first professional experience was at the end of 2018, when I did an internship at a company called
            Newtic. During this period I learned to create APIs with Node.js.
          </Typography>
          <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
            Since then I have been providing services to other companies using technologies from the Javascript
            Ecosystem
          </Typography>

          <Stack flexDirection={"column-reverse"} flex={1}>
            <Link to={"/cases"}>
              <Button variant={"outlined"}>See more cases</Button>
            </Link>
          </Stack>
        </GlassedCard>
      </Grid>
    </Grid>
  );
}
