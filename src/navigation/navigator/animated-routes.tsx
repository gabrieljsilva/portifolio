import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NotFoundPage } from "../../pages";
import { createRouter } from "../router";

export function AnimatedRoutes() {
	const router = createRouter();
	const routes = router.toArray();
	const location = useLocation();

	return (
		<AnimatePresence mode={"wait"}>
			<Routes location={location} key={location.pathname}>
				<Route path={"/"}>
					{routes.map(({ path, Layout, Screen, Transition }, index) => (
						<Route key={index} element={Layout && <Layout />}>
							<Route
								path={path}
								element={
									Transition ? (
										<Transition>
											<Screen />
										</Transition>
									) : (
										<Screen />
									)
								}
							/>
						</Route>
					))}

					<Route path={"*"} element={<NotFoundPage />}></Route>
				</Route>
			</Routes>
		</AnimatePresence>
	);
}
