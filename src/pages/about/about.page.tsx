import {
	Avatar,
	Box,
	Button,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { differenceInYears } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";
import { emailIcon, githubIcon, linkedInIcon } from "../../assets/icons";
import { GlassedContainer, Modal, PaginatedIconList } from "../../components";
import { ContactMeForm } from "../../modules/contacts";

export function AboutPage() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const theme = useTheme();

	const avatarSize = "12rem";
	const myBirthDate = new Date("2000-01-23");
	const myAge = differenceInYears(new Date(Date.now()), myBirthDate);

	const handleRedirect = (url: string) => {
		window.location.replace(url);
	};

	return (
		<Box px={2} width={"100%"}>
			<Box>
				<Typography
					align={"center"}
					variant={"h1"}
					color={"white"}
					fontSize={"2rem"}
					py={2}
					display={"none"}
					sx={{
						[theme.breakpoints.only("xs")]: {
							display: "block",
						},
					}}
				>
					Quem eu sou?
				</Typography>
			</Box>
			<GlassedContainer>
				<Grid container>
					<Grid item xs={12} md={3} justifyContent={"center"} width={"100%"}>
						<Box display={"flex"} justifyContent={"center"}>
							<Avatar
								src={"/images/photos/avatar.jpeg"}
								sx={{ height: avatarSize, width: avatarSize }}
							/>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={9}
						position={"relative"}
						alignItems={"stretch"}
					>
						<Typography
							marginBottom={"1rem"}
							fontSize={"1.75rem"}
							fontWeight={"600"}
							variant={"h1"}
							color={"white"}
							py={1}
							sx={{
								[theme.breakpoints.down("md")]: {
									textAlign: "center",
								},
								[theme.breakpoints.only("xs")]: {
									display: "none",
								},
							}}
						>
							Quem eu sou?
						</Typography>

						<Typography
							color={"white"}
							variant={"body1"}
							sx={{
								[theme.breakpoints.down("md")]: {
									textAlign: "center",
								},
							}}
						>
							Meu nome é <strong>Gabriel de Jesus Silva</strong>, eu tenho{" "}
							<strong> {myAge} anos </strong> e eu sou de{" "}
							<strong>Salvador, Bahia</strong>. Atualmente eu moro no interior
							do estado da
							<strong> Bahia</strong>, na cidade de{" "}
							<strong>Senhor do Bonfim</strong>. Eu comecei minha carreira como
							programador no final de 2018, estagiando em uma empresa da minha
							cidade, onde aprendi a algumas das tecnologias que utilizo até
							hoje.
						</Typography>
						<Box
							position={"absolute"}
							bottom={"-3.25rem"}
							sx={{
								[theme.breakpoints.down("md")]: {
									display: "flex",
									width: "100%",
									justifyContent: "center",
								},
							}}
						>
							<PaginatedIconList
								cardWidth={400}
								technologies={[
									{
										name: "LinkedIn",
										icon: linkedInIcon,
										onClick: () =>
											handleRedirect(
												"https://www.linkedin.com/in/gabrieldjs21/",
											),
									},
									{
										name: "Github",
										icon: githubIcon,
										onClick: () =>
											handleRedirect("https://github.com/gabrieljsilva"),
									},
									{
										name: "Contato",
										icon: emailIcon,
										onClick: () => setIsContactModalOpen(true),
									},
								]}
							/>
						</Box>
					</Grid>
				</Grid>
			</GlassedContainer>

			<Grid container spacing={"2rem"} mt={"1rem"}>
				<Grid item xs={12} md={6} flex={1}>
					<GlassedContainer height={"100%"}>
						<Typography
							textAlign={"center"}
							marginBottom={"1rem"}
							fontSize={"1.75rem"}
							fontWeight={"600"}
							variant={"h1"}
							color={"white"}
						>
							Formação Técnica
						</Typography>
						<Typography
							textAlign={"center"}
							color={"white"}
							variant={"body2"}
							lineHeight={"1.5rem"}
						>
							Eu tenho formação técnica em <strong>informática</strong> pelo
							<strong>
								{" "}
								Instituto Federal de Educação, Ciência e Tecnologia
							</strong>
							. Durante o curso aprendi as bases da programação e tive a
							oportunidade de realizar um <strong>estágio </strong>na área. A
							duração do curso foi de <strong> 1 ano e 6 meses</strong>,
							contando com meu tempo de experiência no estágio.
							<br />
							<br />
							Além disso também fiz 4 semestres de 8 do curso de Ciências da
							Computação, também pelo Instituto Federal.
						</Typography>
						<Stack mt={6} width={"100%"} alignItems={"center"}>
							<Link to={"/skills"}>
								<Button variant={"outlined"}>Veja minhas habilidades</Button>
							</Link>
						</Stack>
					</GlassedContainer>
				</Grid>

				<Grid item xs={12} md={6} flex={1}>
					<GlassedContainer height={"100%"}>
						<Typography
							textAlign={"center"}
							marginBottom={"1rem"}
							fontSize={"1.75rem"}
							fontWeight={"600"}
							variant={"h1"}
							color={"white"}
						>
							Experiências
						</Typography>
						<Typography
							textAlign={"center"}
							color={"white"}
							variant={"body2"}
							lineHeight={"1.5rem"}
						>
							Desde que terminei meu estágio, já passei por algumas empresas e
							ajudei no desenvolvimento de vários projetos. A maior parte desses
							projetos foram voltados para a área da saúde, mas também já atuei
							em projetos voltados para Lawtechs e R&S.
						</Typography>
						<br />
						<Typography
							textAlign={"center"}
							color={"white"}
							variant={"body2"}
							lineHeight={"1.5rem"}
						>
							Em todas as empresas que já prestei serviço eu pude aprender
							tecnologias e técnicas novas que me agregaram valor como
							profissional. Além de conhecer pessoas que me ajudaram no meu
							desenvolvimento pessoal.
						</Typography>

						<Stack mt={6} width={"100%"} alignItems={"center"}>
							<Link to={"/cases"}>
								<Button variant={"outlined"}>
									Veja os projetos em que trabalhei
								</Button>
							</Link>
						</Stack>
					</GlassedContainer>
				</Grid>
			</Grid>
			<Modal
				fullWidth
				maxWidth={"sm"}
				open={isContactModalOpen}
				title={""}
				onClose={() => setIsContactModalOpen(false)}
			>
				<Box px={3} pb={5}>
					<Typography>Entre em contato</Typography>
					<ContactMeForm />
				</Box>
			</Modal>
		</Box>
	);
}
