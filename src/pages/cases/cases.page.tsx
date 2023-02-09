import { GlassedCard } from "../../components";
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
      <GlassedCard
        title={"Demand To Invoice"}
        description={`
        A Takaoka Anestesia é uma rede de anestesiologistas que contrata anestesistas sob demanda para hospitais ou cirurgiões. O projeto Demand To Invoice desenvolvido foi um sistema de escalas médicas, que atende o cliente desde o cadastro, passando pelo atendimento ao paciente até o pagamento.
        `}
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
      <GlassedCard
        title={"Fleury - Escalas Médicas"}
        description={`
         Fleury - Escalas Médicas foi um projeto que trabalhei desde o back-end até o front-end web e mobile. Usando Node.js, React e React Native. A ideia do projeto era criar um aplicativo de escala para médicos da rede Fleury. O objetivo era facilitar a negociação de escalas entre os médicos.
          `}
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

      <GlassedCard
        title={"GoHealth - NPS"}
        description={`
          A GoHealth é uma empresa que oferece uma série de produtos para clínicas e hospitais. um desses produtos
           são GoHealth NPS (Net Promoter Score). Este produto tem como objetivo avaliar a satisfação e as chances de promoção por parte dos pacientes
           dos hospitais parceiros.
        `}
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
