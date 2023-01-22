import { Box, IconButton, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CasesCardTechnologyIcon } from "../cases-card-techology-icon";
import { useRef, useState } from "react";

export interface CasesCardTechnologyItem {
  name: string;
  icon: string;
}

interface TechnologiesListFragmentProps {
  technologies: CasesCardTechnologyItem[];
  cardWidth: number;
}

export function TechnologiesListFragment({ technologies, cardWidth }: TechnologiesListFragmentProps) {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerWidth = containerRef?.current?.offsetWidth || 0;
  const displayArrows = cardWidth * 0.75 <= containerWidth;

  // approximateIconSizeInPixel is an approximate value for each icon item
  // with spacing, it doesn't have to be an exact
  // value, but enough to have a good distribution of icons
  // on each cell phone or tablet screen size
  const approximateIconSizeInPixel = 90;
  const itemsToDisplay = Math.floor(cardWidth / approximateIconSizeInPixel);
  const items = technologies.slice(index, displayArrows ? itemsToDisplay + index : technologies.length);

  const handleNextItem = () => setIndex((currentIndex) => currentIndex + 1);
  const handlePreviousItem = () => setIndex((currentIndex) => currentIndex - 1);

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
            visibility: displayArrows && index + itemsToDisplay < technologies.length ? "visible" : "hidden",
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
