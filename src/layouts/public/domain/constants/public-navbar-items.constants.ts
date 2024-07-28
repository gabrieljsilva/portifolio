import { NavbarItemProps } from "../../../../components/navbar/fragments";

export const publicMenuItems: Array<Omit<NavbarItemProps, "active">> = [
	{
		key: "HOME",
		name: "Início",
		path: "/",
	},
	{
		key: "ABOUT",
		name: "Sobre mim",
		path: "/about",
	},
	{
		key: "SKILLS",
		name: "Habilidades",
		path: "/skills",
	},
	{
		key: "CASES",
		name: "Projetos",
		path: "/cases",
	},
	{
		key: "EXPERIENCE",
		name: "Experiências",
		path: "/experiences",
	},
];
