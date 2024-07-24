import { Grid } from "@mui/material";
import {
  distributeIcon,
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
    <Grid container px={2} spacing={5} mt={-2}>
      <Grid item>
        <GlassedCard
          intervalDate={[new Date("2024-03-02"), undefined]}
          title={"Hospital Israelita Albert Einstein"}
          subTitle={"Fullstack Software Developer"}
          description={`
            O Hospital Israelita Albert Einstein é uma instituição de saúde de renome internacional, conhecida pela excelência em atendimento médico, tecnologia de ponta e inovação em tratamentos. Como desenvolvedor fullstack, contribuí em diversas iniciativas tecnológicas no hospital, principalmente no desenvolvimento de ferramentas para o atendimento primário à saúde, aprimorando a eficiência e a qualidade dos serviços oferecidos aos pacientes.
          `}
          thumbnailUrl={"/images/logo/hiae.png"}
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
              name: "Nest.js",
              icon: nestjsIcon,
            },
            {
              name: "MySQL",
              icon: mySqlIcon,
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
            {
              name: "Microserviços",
              icon: distributeIcon,
            },
          ]}
        />
      </Grid>
      <Grid item>
        <GlassedCard
          intervalDate={[new Date("2021-03-02"), new Date("2022-09-02")]}
          title={"RedFox Digital Solutions"}
          subTitle={"Fullstack Software Developer"}
          description={`
           A RedFox é uma empresa de tecnologia que atua em diversos projetos, principalmente voltados para a área da saúde. Durante o período que trabalhei na RedFox, atuei em diversos projetos dessa área como: plataformas de escalas médicas e NPS para clínicas e hospitais.
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
          subTitle={"Software Developer"}
          description={`
             A Cameja é uma lawtech que visa facilitar o trabalho de advogados, mediadores e árbitros por meio da criação e visualização de petições e movimentações jurídicas de forma automática a partir de modelos pré-estabelecidos. O principal objetivo da empresa é integrar os tribunais regionais de vários estados do país. 
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
          subTitle={"Software Developer Intern"}
          description={`
            Trabalhei como estagiário em programação web na Newtic. Durante o estágio desenvolvi APIs utilizando Node.js, Express e MongoDB e interfaces de usuário utilizando Vue.js.
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
