import { createRouterNavigator } from "./navigation/create-router-navigator";
import { RouterProvider } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <RouterProvider router={createRouterNavigator()} />
    </div>
  );
}
