import { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";
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
  return (
    <GlassedContainer>
      <Grid container alignItems={"center"}>
        <Grid item xs={4}>
          <img src={thumbnailUrl} width={"300rem"} alt={"company logo image"} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant={"h1"} fontSize={"2rem"} fontWeight={"600"} color={"white"}>
            {title}
          </Typography>
          <Typography color={"white"} variant={"body1"} fontWeight={500} mt={2}>
            {description}
          </Typography>
          <Box position={"relative"}>
            <Box display={"flex"} gap={1} position={"absolute"}>
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
