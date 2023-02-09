import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { BrowserNavigator } from "./navigation";
import { muiDarkTheme } from "./theme/material-ui";
import { LocaleContextProvider } from "./contexts";

export function App() {
  return (
    <MuiThemeProvider theme={muiDarkTheme}>
      <CssBaseline>
        <LocaleContextProvider>
          <BrowserNavigator />
        </LocaleContextProvider>
      </CssBaseline>
    </MuiThemeProvider>
  );
}
