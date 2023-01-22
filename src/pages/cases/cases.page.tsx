import { CasesCard } from "../../components";
import { Stack } from "@mui/material";
import {
  dockerIcon,
  graphQLIcon,
  nestjsIcon,
  nextJsIcon,
  nodeIcon,
  postgresqlIcon,
  reactIcon,
  reactNativeIcon,
  typescriptIcon,
  viteIcon,
} from "../../assets/icons";

export function CasesPage() {
  return (
    <Stack width={"100%"} px={2} rowGap={8}>
      <CasesCard
        title={"Demand To Invoice"}
        description={
          "Takaoka Anesthesia is a network of anesthesiologists who hire on-demand anesthetists for hospitals or surgeons. The project developed was a system of medical scales, from registration, through patient care to payment."
        }
        thumbnailUrl={"/images/logo/takaoka-logo.png"}
        technologies={[
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
        ]}
      />

      <CasesCard
        title={"Fleury - Medical Scales"}
        description={`Fleury - Medical Scales was a project that I worked on from the backend to the web and mobile frontend.
          Using Node.js, React and React Native. The idea of the project was to create a scale application for
          doctors in the Fleury network. The objective was to facilitate the negotiation of scales between the
          doctors.`}
        thumbnailUrl={"/images/logo/fleury-logo.png"}
        technologies={[
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
        ]}
      />

      <CasesCard
        title={"GoHealth - NPS"}
        description={`GoHealth is a company that offers a series of products for clinics and hospitals. one of these products 
            are GoHealth NPS (Net Promoter Score). This product aimed to evaluate the satisfaction and chances of promotion by the patients 
            of our clients.`}
        thumbnailUrl={"/images/logo/gohealth-logo.png"}
        technologies={[
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
    </Stack>
  );
}
