import { createRouterNavigator } from "./navigation/navigator/create-router-navigator";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./theme/styled-components";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme/styled-components/themes";

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <RouterProvider router={createRouterNavigator()} />
      </ThemeProvider>
    </div>
  );
}
