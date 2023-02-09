import { ReactNode, useEffect, useRef, useState } from "react";
import { Box, Button, Collapse, Grid, Typography, useTheme } from "@mui/material";
import { GlassedContainer } from "../glassed-container";
import { format } from "date-fns";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@mui/icons-material";
import { PaginatedIconListItem, PaginatedIconList } from "../../paginated-icon-list";
import { useLocaleContext } from "../../../contexts/locale/locale-context";

interface GlassedCardProps {
  title: string;
  subTitle?: string;
  intervalDate?: [Date, Date];
  description: string | ReactNode;
  details?: string | ReactNode;
  thumbnailUrl: string;
  technologies: PaginatedIconListItem[];
}

export function GlassedCard({
  title,
  subTitle,
  description,
  details,
  thumbnailUrl,
  technologies,
  intervalDate,
}: GlassedCardProps) {
  const theme = useTheme();
  const [cardWidth, setCardWidth] = useState(0);
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocaleContext();

  useEffect(() => {
    if (cardRef?.current?.offsetWidth) {
      setCardWidth(cardRef?.current?.offsetWidth);
    }
  }, [cardRef]);

  const formatInterval = () => {
    if (intervalDate) {
      const [start, end] = intervalDate;
      const startDateString = format(start, "MMM yyyy", { locale });
      const endDateString = format(end, "MMM yyyy", { locale });

      return `${startDateString} á ${endDateString}`;
    }
  };

  return (
    <GlassedContainer>
      <Grid container alignItems={"flex-start"}>
        <Grid
          item
          sm={12}
          md={5}
          lg={4}
          sx={{
            [theme.breakpoints.down("md")]: {
              mb: 2,
            },
            [theme.breakpoints.up("md")]: {
              mt: 3,
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

          {subTitle && (
            <Typography variant={"h1"} fontSize={"1.5rem"} fontWeight={"200"} color={"white"}>
              {subTitle}
            </Typography>
          )}

          <Typography color={"white"} variant={"body1"} fontWeight={500} mt={2}>
            {description}
          </Typography>

          {details && (
            <>
              <Box display={"flex"} width={"100%"} justifyContent={"center"} py={2}>
                <Button
                  sx={{ minWidth: "160px" }}
                  variant={"outlined"}
                  color={"primary"}
                  onClick={() => setIsAccordionExpanded(!isAccordionExpanded)}
                  endIcon={isAccordionExpanded ? <ArrowUpwardRounded /> : <ArrowDownwardRounded />}
                >
                  {isAccordionExpanded ? "Ver menos" : "Ver mais"}
                </Button>
              </Box>

              <Collapse in={isAccordionExpanded}>{details}</Collapse>
            </>
          )}

          <Box position={"relative"} ref={cardRef}>
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
              <PaginatedIconList cardWidth={cardWidth} technologies={technologies} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </GlassedContainer>
  );
}
