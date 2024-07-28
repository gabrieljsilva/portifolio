import { RouteItem } from "../../../types";
import { PublicLayout } from "../../../layouts";
import { AboutPage } from "../../../pages";
import { FadeInOutTransition } from "../../../transitions";

enum AboutRoutes {
	ABOUT = "ABOUT",
}

export const aboutRoutes: Record<AboutRoutes, RouteItem> = {
	[AboutRoutes.ABOUT]: {
		path: "/about",
		Layout: PublicLayout,
		Screen: AboutPage,
		Transition: FadeInOutTransition,
	},
};
