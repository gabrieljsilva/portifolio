import { aboutRoutes } from "./about";
import { casesRoutes } from "./cases";
import { homeRoutes } from "./home";
import { skillsRoutes } from "./skills";
import { RouteItem } from "../../types";
import { experiencesRoutes } from "./experiences";
import { contributionsRoutes } from "./contributions";

type AvailableRoutes =
  | keyof typeof aboutRoutes
  | keyof typeof casesRoutes
  | keyof typeof homeRoutes
  | keyof typeof skillsRoutes
  | keyof typeof experiencesRoutes
  | keyof typeof contributionsRoutes;

export function createRouter() {
  const routes = {
    aboutRoutes,
    casesRoutes,
    homeRoutes,
    skillsRoutes,
    experiencesRoutes,
    contributionsRoutes,
  };

  const availableRoutes: AvailableRoutes[] = [];
  for (const route of Object.values(routes)) {
    availableRoutes.push(...(Object.keys(route) as AvailableRoutes[]));
  }

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
