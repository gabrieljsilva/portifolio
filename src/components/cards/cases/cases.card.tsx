import { ReactNode, useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { GlassedContainer } from "../glassed-container";
import { CasesCardTechnologyItem, TechnologiesListFragment } from "./fragments";
import { format } from "date-fns";

interface CasesCardProps {
  title: string;
  intervalDate?: [Date, Date];
  description: string | ReactNode;
  thumbnailUrl: string;
  technologies: CasesCardTechnologyItem[];
}

export function CasesCard({ title, description, thumbnailUrl, technologies, intervalDate }: CasesCardProps) {
  const theme = useTheme();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef?.current?.offsetWidth) {
      setCardWidth(cardRef?.current?.offsetWidth);
    }
  }, [cardRef]);

  const formatInterval = () => {
    if (intervalDate) {
      const [start, end] = intervalDate;
      const startDateString = format(start, "MMM yyyy");
      const endDateString = format(end, "MMM yyyy");

      return `${startDateString} to ${endDateString}`;
    }
  };

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
                width: "12rem",
              },
            }}
          >
            <img src={thumbnailUrl} width={"100%"} alt={"company logo image"} />
            {intervalDate && (
              <Typography
                mt={1}
                sx={{
                  textAlign: "center",
                  [theme.breakpoints.down("md")]: {
                    textAlign: "start",
                  },
                }}
                color={"white"}
                fontSize={"1rem"}
                fontWeight={"200"}
              >
                {formatInterval()}
              </Typography>
            )}
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
            <Box
              width={"100%"}
              display={"flex"}
              position={"absolute"}
              sx={{
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              <TechnologiesListFragment cardWidth={cardWidth} technologies={technologies} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </GlassedContainer>
  );
}
