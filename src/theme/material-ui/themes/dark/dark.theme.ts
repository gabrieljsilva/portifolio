import { createTheme } from "@mui/material";
import { muiDarkPalette } from "./dark.palette";

export const muiDarkTheme = createTheme({
  palette: muiDarkPalette,
  typography: {
    fontFamily: "Roboto, Nunito",
    h1: {
      fontSize: "2.5rem",
      fontWeight: "500",
    },
    subtitle1: {
      fontSize: "2.5rem",
      fontWeight: "200",
    },
    body1: {
      fontFamily: "Nunito",
      fontSize: "1.25rem",
      fontWeight: "300rem",
    },
    body2: {
      fontFamily: "Nunito",
      fontSize: "1rem",
      fontWeight: "300rem",
    },
    caption: {
      fontFamily: "Nunito",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
          ":hover": {
            backgroundColor: "transparent",
          },
        },
        outlined: {
          ":hover": {
            boxShadow: "0px 0px 20px",
          },
        },
      },
    },
  },
});
