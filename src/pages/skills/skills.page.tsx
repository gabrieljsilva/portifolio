import { SkillCard, SkillCardProps } from "../../components";
import { Box, Grid, useTheme } from "@mui/material";
import {
  dockerIcon,
  graphQLIcon,
  javascriptIcon,
  nestjsIcon,
  nodeIcon,
  reactIcon,
  typescriptIcon,
} from "../../assets/icons";

const experiences: SkillCardProps[] = [
  {
    name: "Javascript",
    icon: javascriptIcon,
    startUsing: new Date("2019-09-01"),
    description:
      "Javascript is my main language since I started my professional career as a programmer. I have extensive experience in your ecosystem both front-end and back-end.",
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    startUsing: new Date("2019-09-01"),
    description: `Node.js is the main technology I use for backend development. I have been working professionally with this
    technology since 2019 for the development of APIs and SSR applications.`,
  },
  {
    name: "React.js",
    icon: reactIcon,
    startUsing: new Date("2021-01-01"),
    description: `I've been using React.js for 2 years now for UI development (like this one). Despite being primarily 
    a Backend developer, I still have some experience with React.js.`,
  },
  {
    name: "Typescript",
    icon: typescriptIcon,
    startUsing: new Date("2020-01-01"),
    description: `I adopted Typescript about 3 years ago when I saw some colleagues using it in some projects
    and I decided to test it too. I currently use it professionally in Backend
    and Frontend projects.`,
  },
  {
    name: "Docker",
    icon: dockerIcon,
    startUsing: new Date("2021-01-01"),
    description: `I've been using docker and docker-compose for about 3 years, I had the first contact with some 
    colleagues when they showed me the ease of uploading development environments quickly and soon I started 
    to study and use it in my own personal and professional projects.`,
  },
  {
    name: "GraphQL",
    icon: graphQLIcon,
    startUsing: new Date("2021-01-01"),
    description: `I started using GraphQL about 2 years ago in a project for a client of a company I worked for. We had a 
    big project and the characteristics matched the GraphQL proposal and we used it as a pilot project (and it 
    was a success) since then I've been using it in projects that seem to be convenient.`,
  },
  {
    name: "Nest.js",
    icon: nestjsIcon,
    startUsing: new Date("2021-01-01"),
    description: `I started using Nest.js a few years ago, because I was
    looking for a scalable framework with good maintainability.
    I liked Nest.js for its endless usability. From web development,
    with REST, GraphQL and microservices to standalone apps like CLIs.`,
  },
];

export function SkillsPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: 5,
        [theme.breakpoints.down("sm")]: {
          px: 2,
        },
      }}
    >
      <Grid container spacing={3} justifyContent={"center"}>
        {experiences.map(({ name, icon, description, startUsing }, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <SkillCard name={name} icon={icon} description={description} startUsing={startUsing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
