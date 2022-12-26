import { RouteItem } from "../../../types";
import { PublicLayout } from "../../../layouts";
import { HomePage } from "../../../pages";

enum HomeRoutes {
  "HOME" = "HOME",
}

export const homeRoutes: Record<HomeRoutes, RouteItem> = {
  HOME: {
    path: "/",
    Layout: PublicLayout,
    Screen: HomePage,
  },
};
