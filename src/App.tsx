import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { BrowserNavigator } from "./navigation";
import { muiDarkTheme } from "./theme/material-ui";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "@fontsource/nunito/200.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/900.css";

export function App() {
  return (
    <MuiThemeProvider theme={muiDarkTheme}>
      <CssBaseline>
        <BrowserNavigator />
      </CssBaseline>
    </MuiThemeProvider>
  );
}
