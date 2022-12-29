import { GlobalStyles } from "./theme/styled-components";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme/styled-components/themes";
import { BrowserNavigator } from "./navigation";

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <BrowserNavigator />
      </ThemeProvider>
    </div>
  );
}
