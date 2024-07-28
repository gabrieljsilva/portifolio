import { Box, Grid, Typography } from "@mui/material";
import { GlassedContainer } from "../cards";

interface SocialLinkProps {
	iconUrl: string;
	name: string;
	url: string;
}

export function SocialLink({ url, iconUrl, name }: SocialLinkProps) {
	return (
		<a href={url} style={{ width: "100%" }}>
			<GlassedContainer
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				width={"100%"}
				p={"1rem !important"}
			>
				<Grid container>
					<Grid item xs={2} display={"flex"} alignItems={"center"}>
						<img width={"30rem"} height={"30rem"} src={iconUrl} alt={name} />
					</Grid>
					<Grid item xs={10} display={"flex"} alignItems={"center"}>
						<Typography variant={"body1"} color={"white"} fontWeight={"800"}>
							{name}
						</Typography>
					</Grid>
				</Grid>
			</GlassedContainer>
		</a>
	);
}
