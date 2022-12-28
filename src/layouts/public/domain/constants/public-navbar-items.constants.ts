import { NavbarItemProps } from "../../../../components/navbar/fragments";

export const publicMenuItems: Array<Omit<NavbarItemProps, "active">> = [
  {
    key: "HOME",
    name: "Home",
    path: "/",
  },
  {
    key: "ABOUT",
    name: "About",
    path: "/about",
  },
  {
    key: "SKILLS",
    name: "Skills",
    path: "/skills",
  },
  {
    key: "CASES",
    name: "Cases",
    path: "/cases",
  },
];
