import { Link } from "react-router-dom";
import { Avatar, Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { GlassedContainer } from "../../components";

export function AboutPage() {
  const theme = useTheme();
  const avatarSize = "12rem";

  return (
    <Box p={2} width={"100%"}>
      <GlassedContainer width={"100%"}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <Stack width={"100%"} alignItems={"center"}>
              <Avatar src={"/avatar.jpeg"} sx={{ height: avatarSize, width: avatarSize }} />
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            lg={9}
            xl={10}
            sx={{
              [theme.breakpoints.down("md")]: {
                marginTop: "20px",
              },
            }}
          >
            <Typography
              marginBottom={"1rem"}
              fontSize={"1.75rem"}
              fontWeight={"600"}
              variant={"h1"}
              color={"white"}
              sx={{
                [theme.breakpoints.down("md")]: {
                  textAlign: "center",
                },
              }}
            >
              Who am I?
            </Typography>
            <Typography
              color={"white"}
              variant={"body1"}
              sx={{
                [theme.breakpoints.down("md")]: {
                  textAlign: "center",
                },
              }}
            >
              My name is Gabriel de Jesus Silva, I&apos;m 22 years old and I&apos;m from Salvador, Bahia, Brazil, I
              currently live in the interior of the state of Bahia, in the city of Senhor do Bonfim.
            </Typography>
          </Grid>
        </Grid>
      </GlassedContainer>

      <Grid container spacing={"2rem"} mt={"1rem"}>
        <Grid item xs={12} md={6} flex={1}>
          <GlassedContainer height={"100%"}>
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
              I&apos;ve been a developer since 2018, when I joined a technical course in computer science at the
              Instituto Federal de Educação, Ciência e Tecnologia, which I graduated in 2019. <br />
              In the same year I also joined the higher course in Computer Science in the same institute and completed 4
              semesters.
            </Typography>
          </GlassedContainer>
        </Grid>

        <Grid item xs={12} md={6} flex={1}>
          <GlassedContainer height={"100%"}>
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
            <Stack mt={6} width={"100%"} alignItems={"center"}>
              <Link to={"/cases"}>
                <Button variant={"outlined"}>See more cases</Button>
              </Link>
            </Stack>
          </GlassedContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
