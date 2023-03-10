import { RouteItem } from "../../../types";
import { PublicLayout } from "../../../layouts";
import { SkillsPage } from "../../../pages";
import { FadeInOutTransition } from "../../../transitions";

enum SkillsRoutes {
  "SKILLS" = "SKILLS",
}

export const skillsRoutes: Record<SkillsRoutes, RouteItem> = {
  [SkillsRoutes.SKILLS]: {
    path: "/skills",
    Layout: PublicLayout,
    Screen: SkillsPage,
    Transition: FadeInOutTransition,
  },
};
