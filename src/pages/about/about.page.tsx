import { useState } from "react";
import { Avatar, Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { differenceInYears } from "date-fns";
import { GlassedContainer, Modal } from "../../components";
import { TechnologiesListFragment } from "../../components/cards/cases/fragments";
import { emailIcon, githubIcon, linkedInIcon } from "../../assets/icons";
import { ContactMeForm } from "../../modules/contacts";

export function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const theme = useTheme();

  const avatarSize = "12rem";
  const myBirthDate = new Date("2000-01-23");
  const myAge = differenceInYears(new Date(Date.now()), myBirthDate);

  const handleRedirect = (url: string) => {
    window.location.replace(url);
  };

  return (
    <Box p={2} width={"100%"}>
      <GlassedContainer>
        <Grid container>
          <Grid item xs={12} md={3} justifyContent={"center"} width={"100%"}>
            <Box display={"flex"} justifyContent={"center"}>
              <Avatar src={"/images/photos/avatar.jpeg"} sx={{ height: avatarSize, width: avatarSize }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={9} position={"relative"} alignItems={"stretch"}>
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
              My name is <strong>Gabriel de Jesus Silva</strong>, I&apos;m <strong> {myAge} years old </strong> and
              I&apos;m from <strong>Salvador, Bahia, Brazil</strong>, currently, I live in the state of
              <strong> Bahia</strong>, in the city of <strong>Senhor do Bonfim</strong>. I started my career as a
              developer at the end of 2018 by interning at a company in my city.
            </Typography>
            <Box position={"absolute"} bottom={"-3.25rem"}>
              <TechnologiesListFragment
                cardWidth={400}
                technologies={[
                  {
                    name: "LinkedIn",
                    icon: linkedInIcon,
                    onClick: () => handleRedirect("https://www.linkedin.com/in/gabrieldjs21/"),
                  },
                  {
                    name: "Github",
                    icon: githubIcon,
                    onClick: () => handleRedirect("https://github.com/gabrieljsilva"),
                  },
                  {
                    name: "Contato",
                    icon: emailIcon,
                    onClick: () => setIsContactModalOpen(true),
                  },
                ]}
              />
            </Box>
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
              I started learning programming in early 2018, as soon as I entered a technical course in
              <strong> Computer Science</strong> at the
              <strong> Instituto Federal de Educação, Ciência e Tecnologia</strong>, from which I graduated in
              <strong> 2019</strong>. <br />
              In the same year, I also began my graduation in <strong>Computer Science</strong> at the same institute,
              and have completed 4 semesters out of 8.
            </Typography>
            <Stack mt={6} width={"100%"} alignItems={"center"}>
              <Link to={"/skills"}>
                <Button variant={"outlined"}>see my skills</Button>
              </Link>
            </Stack>
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
              My first professional experience was at the end of <strong>2018</strong>, when I did an internship at a
              company called <strong>Newtic</strong>. During this period, I learned to create APIs with{" "}
              <strong>Node.js</strong> and user interfaces with <strong>Vue.js</strong>.
            </Typography>
            <Typography textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
              Since then, I have been providing services to other companies using technologies from the{" "}
              <strong>Javascript Ecosystem</strong>.
            </Typography>
            <Stack mt={6} width={"100%"} alignItems={"center"}>
              <Link to={"/cases"}>
                <Button variant={"outlined"}>see all my experiences</Button>
              </Link>
            </Stack>
          </GlassedContainer>
        </Grid>
      </Grid>
      <Modal
        fullWidth
        maxWidth={"sm"}
        open={isContactModalOpen}
        title={""}
        onClose={() => setIsContactModalOpen(false)}
      >
        <Box px={3} pb={5}>
          <Typography>Entre em Contato</Typography>
          <ContactMeForm />
        </Box>
      </Modal>
    </Box>
  );
}
