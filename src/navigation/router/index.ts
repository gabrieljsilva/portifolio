import { aboutRoutes } from "./about";
import { casesRoutes } from "./cases";
import { homeRoutes } from "./home";
import { skillsRoutes } from "./skills";
import { RouteItem } from "../../types";

type AvailableRoutes =
  | keyof typeof aboutRoutes
  | keyof typeof casesRoutes
  | keyof typeof homeRoutes
  | keyof typeof skillsRoutes;
const availableRoutes = [...Object.keys(homeRoutes)] as AvailableRoutes[];

export function createRouter() {
  const routes = {
    aboutRoutes,
    casesRoutes,
    homeRoutes,
    skillsRoutes,
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
