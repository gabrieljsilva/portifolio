import { Box, IconButton, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconListItem } from "./fragments";
import { useState } from "react";

export interface PaginatedIconListItem {
	name: string;
	icon: string;
	onClick?: () => void;
}

interface PaginatedIconListProps {
	technologies: PaginatedIconListItem[];
	cardWidth: number;
}

export function PaginatedIconList({
	technologies,
	cardWidth,
}: PaginatedIconListProps) {
	const theme = useTheme();
	const [index, setIndex] = useState(0);

	const approximatedIconSizeInPixel = 64;
	const itemsToDisplay = Math.floor(cardWidth / approximatedIconSizeInPixel);
	const displayArrows =
		cardWidth <= approximatedIconSizeInPixel * technologies.length;
	const endIndex = displayArrows ? itemsToDisplay + index : technologies.length;
	const items = technologies.slice(index, endIndex);
	const showLeftButtonIcon = displayArrows && index > 0;
	const showRightButtonIcon =
		displayArrows && index + itemsToDisplay < technologies.length;

	const handleNextItem = () => setIndex((currentIndex) => currentIndex + 1);
	const handlePreviousItem = () => setIndex((currentIndex) => currentIndex - 1);

	return (
		<Box
			color={"white"}
			display={"flex"}
			alignItems={"center"}
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
					visibility: showLeftButtonIcon ? "visible" : "hidden",
				}}
				color={"inherit"}
			>
				<ChevronLeft fontSize={"large"} />
			</IconButton>

			{items?.map(({ name, icon, onClick }, index) => (
				<IconListItem onClick={onClick} key={index} src={icon} name={name} />
			))}

			<IconButton
				onClick={handleNextItem}
				sx={{
					visibility: showRightButtonIcon ? "visible" : "hidden",
				}}
				color={"inherit"}
			>
				<ChevronRight fontSize={"large"} />
			</IconButton>
		</Box>
	);
}
