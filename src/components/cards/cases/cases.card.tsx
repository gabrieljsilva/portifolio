import { ReactNode, useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { GlassedContainer } from "../glassed-container";
import { CasesCardTechnologyItem, TechnologiesListFragment } from "./fragments";

interface CasesCardProps {
  title: string;
  description: string | ReactNode;
  thumbnailUrl: string;
  technologies: CasesCardTechnologyItem[];
}

export function CasesCard({ title, description, thumbnailUrl, technologies }: CasesCardProps) {
  const theme = useTheme();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef?.current?.offsetWidth) {
      setCardWidth(cardRef?.current?.offsetWidth);
    }
  }, [cardRef]);

  return (
    <GlassedContainer ref={cardRef}>
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
          <Box
            sx={{
              width: "20rem",
              [theme.breakpoints.only("sm")]: {
                width: "15rem",
              },
              [theme.breakpoints.only("xs")]: {
                width: "10rem",
              },
            }}
          >
            <img src={thumbnailUrl} width={"100%"} alt={"company logo image"} />
          </Box>
        </Grid>
        <Grid item sm={12} md={7} lg={8}>
          <Typography variant={"h1"} fontSize={"2rem"} fontWeight={"600"} color={"white"}>
            {title}
          </Typography>
          <Typography color={"white"} variant={"body1"} fontWeight={500} mt={2}>
            {description}
          </Typography>
          <Box position={"relative"}>
            <TechnologiesListFragment cardWidth={cardWidth} technologies={technologies} />
          </Box>
        </Grid>
      </Grid>
    </GlassedContainer>
  );
}
