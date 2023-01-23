import { Box, IconButton, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CasesCardTechnologyIcon } from "../cases-card-techology-icon";
import { useState } from "react";

export interface CasesCardTechnologyItem {
  name: string;
  icon: string;
  onClick?: () => void;
}

interface TechnologiesListFragmentProps {
  technologies: CasesCardTechnologyItem[];
  cardWidth: number;
}

export function TechnologiesListFragment({ technologies, cardWidth }: TechnologiesListFragmentProps) {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  // approximateIconSizeInPixel is an approximate value for each icon item
  // with spacing, it doesn't have to be an exact
  // value, but enough to have a good distribution of icons
  // on each cell phone or tablet screen size
  const approximateIconSizeInPixel = 75;
  const itemsToDisplay = Math.floor(cardWidth / approximateIconSizeInPixel);
  const displayArrows = cardWidth * 0.75 <= approximateIconSizeInPixel * itemsToDisplay;
  const endIndex = displayArrows ? itemsToDisplay + index : technologies.length;
  const items = technologies.slice(index, endIndex);

  const handleNextItem = () => setIndex((currentIndex) => currentIndex + 1);
  const handlePreviousItem = () => setIndex((currentIndex) => currentIndex - 1);

  return (
    <Box
      color={"white"}
      display={"flex"}
      alignItems={"center"}
      gap={1}
      mt={0.5}
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

      {items?.map(({ name, icon, onClick }, index) => (
        <CasesCardTechnologyIcon onClick={onClick} key={index} src={icon} name={name} />
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
  );
}
