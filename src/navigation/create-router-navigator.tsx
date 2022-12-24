import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "../pages/home.page";

export function createRouterNavigator() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"}>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"*"} element={<h1>Olá</h1>}></Route>
      </Route>
    )
  );
}
