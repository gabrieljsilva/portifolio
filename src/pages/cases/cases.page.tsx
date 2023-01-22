import { CasesCard } from "../../components";
import { Box } from "@mui/material";
import {
  dockerIcon,
  graphQLIcon,
  nestjsIcon,
  nodeIcon,
  postgresqlIcon,
  reactIcon,
  typescriptIcon,
} from "../../assets/icons";

export function CasesPage() {
  return (
    <Box width={"100%"} px={2}>
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
      {/* <Grid container gap={"1rem"} alignItems={"center"}> */}
      {/* <Grid item> */}
      {/*  <GlassedContainer width={"20rem"} height={"15rem"}> */}
      {/*    <Stack alignItems={"center"} justifyContent={"space-around"} width={"100%"}> */}
      {/*      <Typography */}
      {/*        textAlign={"center"} */}
      {/*        marginBottom={"1rem"} */}
      {/*        variant={"h1"} */}
      {/*        fontSize={"1.75rem"} */}
      {/*        fontWeight={"600"} */}
      {/*        color={"white"} */}
      {/*      > */}
      {/*        Fleury - Escalas Médicas */}
      {/*      </Typography> */}
      {/*    </Stack> */}
      {/*    <Typography textAlign={"center"} color={"white"} variant={"body1"} lineHeight={"1.5rem"}> */}
      {/*      Fleury - Escalas Médicas was a project that I worked on from the backend to the web and mobile frontend. */}
      {/*      Using Node.js, React and React Native. The idea of the project was to create a scale application for */}
      {/*      doctors in the Fleury network. The objective was to facilitate the negotiation of scales between the */}
      {/*      doctors. */}
      {/*    </Typography> */}
      {/*  </GlassedContainer> */}
      {/* </Grid> */}

      {/* <Grid item> */}
      {/*  <GlassedContainer width={"20rem"} height={"15rem"}> */}
      {/*    <Stack alignItems={"center"} justifyContent={"space-around"} width={"100%"}> */}
      {/*      <Typography */}
      {/*        textAlign={"center"} */}
      {/*        marginBottom={"1rem"} */}
      {/*        variant={"h1"} */}
      {/*        fontSize={"1.75rem"} */}
      {/*        fontWeight={"600"} */}
      {/*        color={"white"} */}
      {/*      > */}
      {/*        GoHealth - NPS (Net Promoter Score) */}
      {/*      </Typography> */}
      {/*    </Stack> */}
      {/*    <Typography textAlign={"center"} color={"white"} variant={"body1"} lineHeight={"1.5rem"}> */}
      {/*      GoHealth is a company that offers a series of products for clinics and hospitals. one of these products */}
      {/*      are GoHealth-NPS. This product aimed to evaluate the satisfaction and chances of promotion by the patients */}
      {/*      of our clients. */}
      {/*    </Typography> */}
      {/*  </GlassedContainer> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </Box>
  );
}
