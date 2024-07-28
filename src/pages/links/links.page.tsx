import { Stack, Typography } from "@mui/material";
import {
	emailIcon,
	githubIcon,
	instagramIcon,
	linkedInIcon,
} from "../../assets/icons";
import { SocialLink } from "../../components/social-link";

export function LinksPage() {
	return (
		<Stack
			width={"100%"}
			minHeight={"100vh"}
			justifyContent={"center"}
			alignItems={"center"}
			flex={1}
			px={"2rem"}
			pb={"5rem"}
			gap={1}
		>
			<Typography
				variant={"h1"}
				fontSize={"2rem"}
				fontWeight={"700"}
				mb={2}
				color={"white"}
			>
				Meus Links
			</Typography>
			<SocialLink
				name={"LinkedIn"}
				iconUrl={linkedInIcon}
				url={"https://www.linkedin.com/in/gabrieldjs21"}
			/>
			<SocialLink
				name={"Instagram"}
				iconUrl={instagramIcon}
				url={"https://www.instagram.com/gabrieljsillva"}
			/>
			<SocialLink
				name={"GitHub"}
				iconUrl={githubIcon}
				url={"https://github.com/gabrieljsilva"}
			/>
			<SocialLink
				name={"E-mail"}
				iconUrl={emailIcon}
				url={"mailto:contato@gabrieljs.dev"}
			/>
		</Stack>
	);
}
