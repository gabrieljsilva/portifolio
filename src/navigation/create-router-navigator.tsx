import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";

export function createRouterNavigator() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"}>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"*"} element={<NotFoundPage />}></Route>
      </Route>
    ),
    {
      basename: "/portifolio",
    }
  );
}
