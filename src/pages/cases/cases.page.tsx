import { Box, Stack, Typography, useTheme } from "@mui/material";
import {
	bootstrapIcon,
	dockerIcon,
	expressIcon,
	graphQLIcon,
	mySqlIcon,
	nestjsIcon,
	nextJsIcon,
	nodeIcon,
	postgresqlIcon,
	reactIcon,
	reactNativeIcon,
	typescriptIcon,
	viteIcon,
} from "../../assets/icons";
import { GlassedCard } from "../../components";

export function CasesPage() {
	const theme = useTheme();

	return (
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
				Projetos em que já atuei
			</Typography>
			<Stack width={"100%"} px={2} rowGap={8}>
				<GlassedCard
					title={"Untimeless"}
					description={`
							Untimeless é um sistema de timesheet e timetracker que facilita o acompanhamento de horas trabalhadas. Com funcionalidades de geração de relatórios, ele oferece uma visão do tempo dedicado às tarefas. Utilizando inteligência artificial, proporciona insights sobre o desempenho dos colaboradores, ajudando a otimizar a produtividade e a tomada de decisões.
        	`}
					thumbnailUrl={"/images/logo/untimeless-logo.png"}
					technologies={[
						{
							name: "Node.js",
							icon: nodeIcon,
						},
						{
							name: "Typescript",
							icon: typescriptIcon,
						},
						{
							name: "React.js",
							icon: reactIcon,
						},
						{
							name: "Nest.js",
							icon: nestjsIcon,
						},
						{
							name: "PostgresSQL",
							icon: postgresqlIcon,
						},
						{
							name: "GraphQL",
							icon: graphQLIcon,
						},
						{
							name: "Docker",
							icon: dockerIcon,
						},
						{
							name: "Vite",
							icon: viteIcon,
						},
					]}
				/>
				<GlassedCard
					title={"Demand To Invoice"}
					description={`
        A Takaoka Anestesia é uma rede de anestesiologistas que contrata anestesistas sob demanda para hospitais ou cirurgiões. O projeto Demand To Invoice desenvolvido foi um sistema de escalas médicas, que atende o cliente desde o cadastro, passando pelo atendimento ao paciente até o pagamento.
        `}
					thumbnailUrl={"/images/logo/takaoka-logo.png"}
					technologies={[
						{
							name: "Node.js",
							icon: nodeIcon,
						},
						{
							name: "Typescript",
							icon: typescriptIcon,
						},
						{
							name: "React.js",
							icon: reactIcon,
						},
						{
							name: "Nest.js",
							icon: nestjsIcon,
						},
						{
							name: "PostgresSQL",
							icon: postgresqlIcon,
						},
						{
							name: "GraphQL",
							icon: graphQLIcon,
						},
						{
							name: "Docker",
							icon: dockerIcon,
						},
					]}
				/>

				<GlassedCard
					title={"Fleury - Escalas Médicas"}
					description={`
         Fleury - Escalas Médicas foi um projeto que trabalhei desde o back-end até o front-end web e mobile. Usando Node.js, React e React Native. A ideia do projeto era criar um aplicativo de escala para médicos da rede Fleury. O objetivo era facilitar a negociação de escalas entre os médicos.
          `}
					thumbnailUrl={"/images/logo/fleury-logo.png"}
					technologies={[
						{
							name: "Node.js",
							icon: nodeIcon,
						},
						{
							name: "Typescript",
							icon: typescriptIcon,
						},
						{
							name: "React.js",
							icon: reactIcon,
						},
						{
							name: "React Native",
							icon: reactNativeIcon,
						},
						{
							name: "Next.js",
							icon: nextJsIcon,
						},
						{
							name: "Nest.js",
							icon: nestjsIcon,
						},
						{
							name: "PostgresSQL",
							icon: postgresqlIcon,
						},
						{
							name: "GraphQL",
							icon: graphQLIcon,
						},
						{
							name: "Docker",
							icon: dockerIcon,
						},
					]}
				/>

				<GlassedCard
					title={"GoHealth - NPS"}
					description={`
          A GoHealth é uma empresa que oferece uma série de produtos para clínicas e hospitais. um desses produtos
           são GoHealth NPS (Net Promoter Score). Este produto tem como objetivo avaliar a satisfação e as chances de promoção por parte dos pacientes
           dos hospitais parceiros.
        `}
					thumbnailUrl={"/images/logo/gohealth-logo.png"}
					technologies={[
						{
							name: "Node.js",
							icon: nodeIcon,
						},
						{
							name: "Typescript",
							icon: typescriptIcon,
						},
						{
							name: "React.js",
							icon: reactIcon,
						},

						{
							name: "Nest.js",
							icon: nestjsIcon,
						},
						{
							name: "PostgresSQL",
							icon: postgresqlIcon,
						},
						{
							name: "GraphQL",
							icon: graphQLIcon,
						},
						{
							name: "Docker",
							icon: dockerIcon,
						},
						{
							name: "Vite",
							icon: viteIcon,
						},
					]}
				/>
				<GlassedCard
					title={"Pecunias"}
					description={`
         Este foi um projeto que visava dividir grandes títulos de precatórios em outros títulos menores, tornando-os mais acessiveis para negociação.
         O Projeto além de gerenciar as transações entre os usuários também gerava contratos automaticamente.
        `}
					technologies={[
						{
							name: "Node.js",
							icon: nodeIcon,
						},
						{
							name: "MySQL",
							icon: mySqlIcon,
						},
						{
							name: "Express.js",
							icon: expressIcon,
						},
						{
							name: "Bootstrap",
							icon: bootstrapIcon,
						},
					]}
				/>
			</Stack>
		</Box>
	);
}
