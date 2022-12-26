import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { NotFoundPage } from "../../pages";
import { createRouter } from "../router";

export function createRouterNavigator() {
  const router = createRouter();
  const routes = router.toArray();

  return createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"}>
        {routes.map(({ path, Layout, Screen }, index) => (
          <Route key={index} element={Layout && <Layout />}>
            <Route path={path} element={<Screen />} />
          </Route>
        ))}

        <Route path={"*"} element={<NotFoundPage />}></Route>
      </Route>
    ),
    {
      basename: "/portifolio",
    }
  );
}
