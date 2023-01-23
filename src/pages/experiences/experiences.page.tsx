import { Box } from "@mui/material";
import {
  dockerIcon,
  graphQLIcon,
  javascriptIcon,
  nestjsIcon,
  nextJsIcon,
  nodeIcon,
  postgresqlIcon,
  reactIcon,
  reactNativeIcon,
  typescriptIcon,
  viteIcon,
} from "../../assets/icons";
import { CasesCard } from "../../components";

export function ExperiencesPage() {
  return (
    <Box px={2}>
      <CasesCard
        intervalDate={[new Date("2021-03-02"), new Date("2022-09-02")]}
        title={"RedFox Digital Solutions"}
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
    </Box>
  );
}
