import { aboutRoutes } from "./about";
import { casesRoutes } from "./cases";
import { homeRoutes } from "./home";
import { skillsRoutes } from "./skills";
import { RouteItem } from "../../types";
import { experiencesRoutes } from "./experiences";

type AvailableRoutes =
  | keyof typeof aboutRoutes
  | keyof typeof casesRoutes
  | keyof typeof homeRoutes
  | keyof typeof skillsRoutes
  | keyof typeof experiencesRoutes;

const availableRoutes = [
  ...Object.keys(aboutRoutes),
  ...Object.keys(casesRoutes),
  ...Object.keys(homeRoutes),
  ...Object.keys(skillsRoutes),
  ...Object.keys(experiencesRoutes),
] as AvailableRoutes[];

export function createRouter() {
  const routes = {
    aboutRoutes,
    casesRoutes,
    homeRoutes,
    skillsRoutes,
    experiencesRoutes,
  };

  function toArray() {
    const routesList: RouteItem[] = [];
    for (const router of Object.values(routes)) {
      for (const route of Object.values(router)) {
        routesList.push(route);
      }
    }
    return routesList;
  }

  return {
    availableRoutes,
    routes,
    toArray,
  };
}
