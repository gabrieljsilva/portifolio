import { Box, Grid, Typography, useTheme } from "@mui/material";
import {
	awsIcon,
	distributeIcon,
	dockerIcon,
	graphQLIcon,
	javascriptIcon,
	nestjsIcon,
	nodeIcon,
	reactIcon,
	typescriptIcon,
} from "../../assets/icons";
import { SkillCard, type SkillCardProps } from "../../components";

const experiences: SkillCardProps[] = [
	{
		name: "Javascript",
		icon: javascriptIcon,
		startUsing: new Date("2019-09-01"),
		description: `
    Javascript é minha linguagem principal desde que comecei minha carreira profissional como programador. Tenho uma vasta experiência em seu ecossistema, tanto front-end quanto back-end.
    `,
	},
	{
		name: "Node.js",
		icon: nodeIcon,
		startUsing: new Date("2019-09-01"),
		description: `Node.js é a principal tecnologia que uso para desenvolvimento de back-end. Trabalho profissionalmente com esta tecnologia desde 2019 para o desenvolvimento de APIs e aplicações SSR.`,
	},
	{
		name: "React.js",
		icon: reactIcon,
		startUsing: new Date("2021-01-01"),
		description: `Eu uso o React.js há 2 anos para desenvolvimento de interface do usuário (como este site). Apesar de ser principalmente um desenvolvedor Back-end, ainda tenho uma boa experiência com React.js.`,
	},
	{
		name: "Typescript",
		icon: typescriptIcon,
		startUsing: new Date("2020-01-01"),
		description: `Eu Adotei o Typescript há uns 3 anos atrás quando vi alguns colegas usando em alguns projetos e resolvi testar também. Atualmente utilizo profissionalmente em projetos Back-end e Front-end.`,
	},
	{
		name: "Docker",
		icon: dockerIcon,
		startUsing: new Date("2021-01-01"),
		description: `Utilizo docker e docker-compose há cerca de 3 anos, tive o primeiro contato com alguns colegas quando me mostraram a facilidade de carregar ambientes de desenvolvimento rapidamente e logo comecei a estudar e utilizar em meus projetos pessoais e profissionais.`,
	},
	{
		name: "GraphQL",
		icon: graphQLIcon,
		startUsing: new Date("2021-01-01"),
		description: `Comecei a usar o GraphQL há cerca de 2 anos em um projeto para um cliente de uma empresa em que trabalhava. Nós tinhamos um
     grande projeto e as características bateram com a proposta do GraphQL e usamos como projeto piloto (e
     foi um sucesso) desde então tenho usado em projetos que em parece ser conveniente.`,
	},
	{
		name: "Nest.js",
		icon: nestjsIcon,
		startUsing: new Date("2021-01-01"),
		description: `Comecei a usar o Nest.js há alguns anos, porque procurava um framework escalável e com boa manutenabilidade. Gostei do Nest.js por sua usabilidade grande escala de usos, desde desenvolvimento web, com REST, GraphQL e microsserviços até aplicações autônomas como CLIs.`,
	},
	{
		name: "Microserviços",
		icon: distributeIcon,
		startUsing: new Date("2022-12-01"),
		description: `
      Eu comecei a trabalhar com microserviços em um projeto que requeria essa arquitetura. Desde então, tenho me aprofundado nesse assunto. Para criar e consumir os microserviços, estou utilizando principamente o framework o Nestjs.
      Trabalhar com microserviços pode ser bem desafiador, mas abre muitas possibilidades. 
    `,
	},
	{
		name: "Amazon Web Services",
		icon: awsIcon,
		startUsing: new Date("2022-08-01"),
		description: `
      Eu utilizo ambientes cloud da AWS principalmente para integrações e deploy de aplicações. Dentre as ferramentas da AWS, as principais que utilizei são: S3, EC2 e Amplify.
    `,
	},
];

export function SkillsPage() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				px: 5,
				[theme.breakpoints.down("sm")]: {
					px: 2,
				},
			}}
		>
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
					Minhas Habildades
				</Typography>
			</Box>

			<Grid container spacing={3} justifyContent={"center"}>
				{experiences.map(({ name, icon, description, startUsing }, index) => (
					<Grid key={name} item xs={12} sm={6} md={4} lg={4}>
						<SkillCard
							name={name}
							icon={icon}
							description={description}
							startUsing={startUsing}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
