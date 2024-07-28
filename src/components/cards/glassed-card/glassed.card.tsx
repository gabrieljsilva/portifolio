import { ArrowDownwardRounded, ArrowUpwardRounded } from "@mui/icons-material";
import {
	Box,
	Button,
	Collapse,
	Grid,
	Typography,
	useTheme,
} from "@mui/material";
import { format } from "date-fns";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useLocaleContext } from "../../../contexts";
import {
	PaginatedIconList,
	type PaginatedIconListItem,
} from "../../paginated-icon-list";
import { GlassedContainer } from "../glassed-container";

interface GlassedCardProps {
	title: string;
	subTitle?: string;
	intervalDate?: [Date, Date | undefined];
	description: string | ReactNode;
	details?: string | ReactNode;
	thumbnailUrl?: string;
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

			let formatedDateString = `${startDateString} - `;

			if (end) {
				const endDateString = format(end, "MMM yyyy", { locale });
				formatedDateString += `${endDateString}`;
			}

			if (!end) {
				formatedDateString += "Atualmente";
			}

			return formatedDateString;
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
						{thumbnailUrl && (
							<img src={thumbnailUrl} width={"100%"} alt={"company"} />
						)}
						{!thumbnailUrl && (
							<Typography
								textAlign={"center"}
								color={"white"}
								fontSize={"4rem"}
								fontWeight={"600"}
								fontStyle={"italic"}
							>
								{title}
							</Typography>
						)}
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
					<Typography
						variant={"h1"}
						fontSize={"2rem"}
						fontWeight={"600"}
						color={"white"}
					>
						{title}
					</Typography>

					{subTitle && (
						<Typography
							variant={"h1"}
							fontSize={"1.5rem"}
							fontWeight={"200"}
							color={"white"}
						>
							{subTitle}
						</Typography>
					)}

					<Typography
						color={"white"}
						variant={"body1"}
						fontWeight={500}
						mt={2}
						sx={{
							[theme.breakpoints.down("md")]: {
								fontSize: "1rem",
							},
						}}
					>
						{description}
					</Typography>

					{details && (
						<>
							<Box
								display={"flex"}
								width={"100%"}
								justifyContent={"center"}
								py={2}
							>
								<Button
									sx={{ minWidth: "160px" }}
									variant={"outlined"}
									color={"primary"}
									onClick={() => setIsAccordionExpanded(!isAccordionExpanded)}
									endIcon={
										isAccordionExpanded ? (
											<ArrowUpwardRounded />
										) : (
											<ArrowDownwardRounded />
										)
									}
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
							<PaginatedIconList
								cardWidth={cardWidth}
								technologies={technologies}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</GlassedContainer>
	);
}
