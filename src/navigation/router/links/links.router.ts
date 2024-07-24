import { RouteItem } from "../../../types";
import { LinksLayout } from "../../../layouts";
import { FadeInOutTransition } from "../../../transitions";
import { LinksPage } from "../../../pages/links";

enum LinksRoutes {
  "LINKS" = "LINKS",
}

export const linksRoutes: Record<LinksRoutes, RouteItem> = {
  LINKS: {
    path: "/links",
    Layout: LinksLayout,
    Screen: LinksPage,
    Transition: FadeInOutTransition,
  },
};
