import { RouteItem } from "../../../types";
import { PublicLayout } from "../../../layouts";
import { FadeInOutTransition } from "../../../transitions";
import { ContributionsPage } from "../../../pages/contributions";

enum ContributionsRoutes {
  "CONTRIBUTIONS" = "CONTRIBUTIONS",
}

export const contributionsRoutes: Record<ContributionsRoutes, RouteItem> = {
  [ContributionsRoutes.CONTRIBUTIONS]: {
    path: "/contributions",
    Layout: PublicLayout,
    Screen: ContributionsPage,
    Transition: FadeInOutTransition,
  },
};
