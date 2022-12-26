import { RouteItem } from "../../../types";
import { PublicLayout } from "../../../layouts";
import { CasesPage } from "../../../pages";

enum CasesRoutes {
  "CASES" = "CASES",
}

export const casesRoutes: Record<CasesRoutes, RouteItem> = {
  [CasesRoutes.CASES]: {
    path: "/cases",
    Layout: PublicLayout,
    Screen: CasesPage,
  },
};
