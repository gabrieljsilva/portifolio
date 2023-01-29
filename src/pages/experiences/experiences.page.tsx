import { Grid } from "@mui/material";
import {
  dockerIcon,
  graphQLIcon,
  javascriptIcon,
  mongoDBIcon,
  mySqlIcon,
  nestjsIcon,
  nextJsIcon,
  nodeIcon,
  postgresqlIcon,
  reactIcon,
  reactNativeIcon,
  typescriptIcon,
  viteIcon,
  vueIcon,
} from "../../assets/icons";
import { GlassedCard } from "../../components";

export function ExperiencesPage() {
  return (
    <Grid container px={2} spacing={5}>
      <Grid item>
        <GlassedCard
          intervalDate={[new Date("2021-03-02"), new Date("2022-09-02")]}
          title={"RedFox Digital Solutions"}
          subTitle={"Fullstack Software Developer"}
          description={`
          RedFox is a technology company. It works on several projects, mainly
          focused on the health sector. During the period that I worked at RedFox, I worked on several projects of that
          area such as: platforms of medical scales and NPS for clinics and hospitals.
        `}
          thumbnailUrl={"/images/logo/redfox-logo.svg"}
          technologies={[
            {
              name: "Javascript",
              icon: javascriptIcon,
            },
            {
              name: "Node.js",
              icon: nodeIcon,
            },
            {
              name: "Typescript",
              icon: typescriptIcon,
            },
            {
              name: "React.js",
              icon: reactIcon,
            },
            {
              name: "React Native",
              icon: reactNativeIcon,
            },
            {
              name: "Next.js",
              icon: nextJsIcon,
            },
            {
              name: "Nest.js",
              icon: nestjsIcon,
            },
            {
              name: "PostgresSQL",
              icon: postgresqlIcon,
            },
            {
              name: "GraphQL",
              icon: graphQLIcon,
            },
            {
              name: "Docker",
              icon: dockerIcon,
            },
            {
              name: "Vite",
              icon: viteIcon,
            },
          ]}
        />
      </Grid>
      <Grid item>
        <GlassedCard
          intervalDate={[new Date("2019-09-02"), new Date("2020-02-02")]}
          title={"Cameja"}
          description={`
          Cameja is a lawtech company that aims to facilitate the work of 
          lawyers, mediators, and arbitrators by creating and visualizing petitions and judicial 
          movements automatically using pre-established models. The company's main objective is to 
          integrate regional courts from various states. While I was employed at Cameja, I also worked on 
          a project called Pecunias, which aimed to divide large precatory titles into 
          smaller, more affordable ones for negotiation.
        `}
          thumbnailUrl={"/images/logo/cameja-logo.svg"}
          technologies={[
            {
              name: "Javascript",
              icon: javascriptIcon,
            },
            {
              name: "Node.js",
              icon: nodeIcon,
            },
            {
              name: "Vue.js",
              icon: vueIcon,
            },
            {
              name: "MySQL",
              icon: mySqlIcon,
            },
          ]}
        />
      </Grid>
      <Grid item>
        <GlassedCard
          intervalDate={[new Date("2018-12-02"), new Date("2019-01-02")]}
          title={"Newtic"}
          description={`
          I worked as an intern in web programming at the company.
          During the internship I developed APIs using Node.js, Express and MongoDB
          and user interfaces using Vue.js.
        `}
          thumbnailUrl={"/images/logo/newtic-logo.svg"}
          technologies={[
            {
              name: "Javascript",
              icon: javascriptIcon,
            },
            {
              name: "Node.js",
              icon: nodeIcon,
            },
            {
              name: "Vue.js",
              icon: vueIcon,
            },
            {
              name: "MongoDB",
              icon: mongoDBIcon,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
