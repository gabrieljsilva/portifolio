import { RouteItem } from "../../../types";
import { PublicLayout } from "../../../layouts";
import { ExperiencesPage } from "../../../pages";
import { FadeInOutTransition } from "../../../transitions";

enum ExperiencesRoutes {
	EXPERIENCES = "EXPERIENCES",
}

export const experiencesRoutes: Record<ExperiencesRoutes, RouteItem> = {
	EXPERIENCES: {
		path: "/experiences",
		Layout: PublicLayout,
		Screen: ExperiencesPage,
		Transition: FadeInOutTransition,
	},
};
