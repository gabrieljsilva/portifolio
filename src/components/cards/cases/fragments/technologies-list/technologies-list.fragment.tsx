import { Box, IconButton, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CasesCardTechnologyIcon } from "../cases-card-techology-icon";
import { useEffect, useRef, useState } from "react";

export interface CasesCardTechnologyItem {
  name: string;
  icon: string;
}

interface TechnologiesListFragmentProps {
  technologies: CasesCardTechnologyItem[];
  cardWidth: number;
}

const TOTAL_ITEMS_TO_DISPLAY = 6;

export function TechnologiesListFragment({ technologies, cardWidth }: TechnologiesListFragmentProps) {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef?.current?.offsetWidth) {
      setContainerWidth(containerRef?.current?.offsetWidth);
    }
  }, [containerRef]);

  const handleNextItem = () => setIndex((currentIndex) => currentIndex + 1);
  const handlePreviousItem = () => setIndex((currentIndex) => currentIndex - 1);

  const items = technologies.slice(index, TOTAL_ITEMS_TO_DISPLAY + index);
  const displayArrows = cardWidth * 0.85 <= containerWidth;

  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
      <Box
        mt={0.5}
        color={"white"}
        ref={containerRef}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        position={"absolute"}
        sx={{
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
          },
        }}
      >
        <IconButton
          onClick={handlePreviousItem}
          sx={{
            visibility: displayArrows && index > 0 ? "visible" : "hidden",
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          }}
          color={"inherit"}
        >
          <ChevronLeft fontSize={"large"} />
        </IconButton>

        {items?.map(({ name, icon }, index) => (
          <CasesCardTechnologyIcon key={index} src={icon} name={name} />
        ))}

        <IconButton
          onClick={handleNextItem}
          sx={{
            visibility: displayArrows && index + TOTAL_ITEMS_TO_DISPLAY < technologies.length ? "visible" : "hidden",
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          }}
          color={"inherit"}
        >
          <ChevronRight fontSize={"large"} />
        </IconButton>
      </Box>
    </Box>
  );
}
