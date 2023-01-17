import { GlassedCard } from "../../components";
import { Box, Grid, Stack, Typography } from "@mui/material";

export function SkillsPage() {
  return (
    <Box>
      <Grid container gap={"1rem"} justifyContent={"center"}>
        <Grid item>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Typography
                textAlign={"center"}
                marginBottom={"1rem"}
                variant={"h1"}
                fontSize={"1.75rem"}
                fontWeight={"600"}
                color={"white"}
              >
                Javascript
              </Typography>
            </Stack>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              Javascript is my main language since I started my professional career as a programmer. I have extensive
              experience in your ecosystem both front-end and back-end.
            </Typography>
          </GlassedCard>
        </Grid>
        <Grid item>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Typography
                textAlign={"center"}
                marginBottom={"1rem"}
                variant={"h1"}
                fontSize={"1.75rem"}
                fontWeight={"600"}
                color={"white"}
              >
                Node.js
              </Typography>
            </Stack>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              Node.js is the main technology I use for backend development. I have been working professionally with this
              technology since 2019 for the development of APIs and SSR applications.
            </Typography>
          </GlassedCard>
        </Grid>
        <Grid item>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Typography
                textAlign={"center"}
                marginBottom={"1rem"}
                variant={"h1"}
                fontSize={"1.75rem"}
                fontWeight={"600"}
                color={"white"}
              >
                React.js
              </Typography>
            </Stack>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              I&apos;ve been using React.js for 2 years now for UI development (like this one). Despite being primarily
              a Backend developer, I still have some experience with React.js.
            </Typography>
          </GlassedCard>
        </Grid>
        <Grid item>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Typography
                textAlign={"center"}
                marginBottom={"1rem"}
                variant={"h1"}
                fontSize={"1.75rem"}
                fontWeight={"600"}
                color={"white"}
              >
                Typescript
              </Typography>
            </Stack>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              I adopted Typescript about 3 years ago when I saw some colleagues using it in some projects and I decided
              to test it too. I currently use it professionally in Backend and Frontend projects.
            </Typography>
          </GlassedCard>
        </Grid>
        <Grid item>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Typography
                textAlign={"center"}
                marginBottom={"1rem"}
                variant={"h1"}
                fontSize={"1.75rem"}
                fontWeight={"600"}
                color={"white"}
              >
                Docker
              </Typography>
            </Stack>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              I&apos;ve been using docker and docker-compose for about 3 years, I had the first contact with some
              colleagues when they showed me the ease of uploading development environments quickly and soon I started
              to study and use it in my own personal and professional projects.
            </Typography>
          </GlassedCard>
        </Grid>
        <Grid item>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Typography
                textAlign={"center"}
                marginBottom={"1rem"}
                variant={"h1"}
                fontSize={"1.75rem"}
                fontWeight={"600"}
                color={"white"}
              >
                GraphQL
              </Typography>
            </Stack>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              I started using GraphQL about 2 years ago in a project for a client of a company I worked for. We had a
              big project and the characteristics matched the GraphQL proposal and we used it as a pilot project (and it
              was a success) since then I&apos;ve been using it in projects that seem to be convenient.
            </Typography>
          </GlassedCard>
        </Grid>
      </Grid>
    </Box>
  );
}
