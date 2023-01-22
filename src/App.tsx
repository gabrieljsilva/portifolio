import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { BrowserNavigator } from "./navigation";
import { muiDarkTheme } from "./theme/material-ui";

export function App() {
  return (
    <MuiThemeProvider theme={muiDarkTheme}>
      <CssBaseline>
        <BrowserNavigator />
      </CssBaseline>
    </MuiThemeProvider>
  );
}
