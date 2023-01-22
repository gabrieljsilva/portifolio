import { ReactNode } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { GlassedContainer } from "../glassed-container";
import { CasesCardTechnologyIcon } from "./fragments";

interface CasesCardTechnologyItem {
  name: string;
  icon: string;
}

interface CasesCardProps {
  title: string;
  description: string | ReactNode;
  thumbnailUrl: string;
  technologies?: CasesCardTechnologyItem[];
}

export function CasesCard({ title, description, thumbnailUrl, technologies }: CasesCardProps) {
  const theme = useTheme();

  return (
    <GlassedContainer>
      <Grid container alignItems={"center"}>
        <Grid
          item
          sm={12}
          md={5}
          lg={4}
          sx={{
            [theme.breakpoints.down("md")]: {
              mb: 2,
            },
          }}
        >
          <img src={thumbnailUrl} width={"300rem"} alt={"company logo image"} />
        </Grid>
        <Grid item sm={12} md={7} lg={8}>
          <Typography variant={"h1"} fontSize={"2rem"} fontWeight={"600"} color={"white"}>
            {title}
          </Typography>
          <Typography color={"white"} variant={"body1"} fontWeight={500} mt={2}>
            {description}
          </Typography>
          <Box position={"relative"}>
            <Box
              display={"flex"}
              gap={1}
              position={"absolute"}
              sx={{
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                  width: "100%",
                },
              }}
            >
              {technologies?.map(({ name, icon }, index) => (
                <CasesCardTechnologyIcon key={index} src={icon} name={name} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </GlassedContainer>
  );
}
