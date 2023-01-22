import { Link } from "react-router-dom";
import { Avatar, Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { differenceInYears } from "date-fns";
import { GlassedContainer } from "../../components";

export function AboutPage() {
  const theme = useTheme();
  const avatarSize = "12rem";
  const myBirthDate = new Date("2000-01-23");
  const myAge = differenceInYears(new Date(Date.now()), myBirthDate);

  return (
    <Box p={2} width={"100%"}>
      <GlassedContainer width={"100%"}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <Stack width={"100%"} alignItems={"center"}>
              <Avatar src={"/images/photos/avatar.jpeg"} sx={{ height: avatarSize, width: avatarSize }} />
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
              My name is <strong>Gabriel de Jesus Silva</strong>, I&apos;m <strong> {myAge} years old </strong>and
              I&apos;m from <strong>Salvador, Bahia, Brazil </strong>, I currently live in the state of
              <strong> Bahia</strong>, in the city of
              <strong> Senhor do Bonfim </strong>.
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
              Educational Background
            </Typography>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              I&apos;ve been a developer since<strong> 2018 </strong>, when I joined a technical course in
              <strong> Computer science </strong> at the
              <strong> Instituto Federal de Educação, Ciência e Tecnologia</strong>, which I graduated in
              <strong> 2019</strong>. <br />
              In the same year I also started my graduation in <strong> Computer Science </strong> in the same institute
              and completed 4 semesters of 8.
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
              Experiences
            </Typography>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              My first professional experience was at the end of <strong> 2018 </strong>, when I did an internship at a
              company called <strong>Newtic </strong>. During this period I learned to create APIs with
              <strong> Node.js </strong> and user interface with <strong>Vue.js </strong>.
            </Typography>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              Since then I have been providing services to other companies using technologies from the
              <strong> Javascript Ecosystem. </strong>
            </Typography>
            <Stack mt={6} width={"100%"} alignItems={"center"}>
              <Link to={"/cases"}>
                <Button variant={"outlined"}>see all my experiences</Button>
              </Link>
            </Stack>
          </GlassedContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
