import { Theme } from "../../theme";

export const mainTheme = new Theme({
  topBarNavigationHeight: "3.5em",
  fontFamily: ["Roboto", "Sans Serif", "Nunito"],
  fonts: {
    title: "Roboto",
    subtitle: "Roboto",
    body: "Nunito",
    thinTitle: "Roboto",
    menuItem: "Nunito",
  },
  fontSizes: {
    title: "2.5rem",
    subtitle: "1.75rem",
    body: "1.25rem",
    thinTitle: "2.5rem",
    menuItem: "1.25rem",
  },
  fontWeights: {
    title: "600",
    subtitle: "400",
    body: "300",
    thinTitle: "100",
    menuItem: "900",
  },
  colors: {
    light: {
      main: "white",
      contrast: "",
    },
    primary: {
      main: "#F72585",
      contrast: "#FFF",
    },
    secondary: {
      main: "#7209B7",
      contrast: "white",
    },
    success: {
      main: "",
      contrast: "white",
    },
    info: {
      main: "",
      contrast: "white",
    },
    warning: {
      main: "",
      contrast: "white",
    },
    danger: {
      main: "",
      contrast: "white",
    },
    lightGray: {
      main: "#C7C7C7",
      contrast: "",
    },
  },
  buttonSizes: {
    sm: {
      fontSize: "18px",
      padding: "8px",
    },
    md: {
      fontSize: "18px",
      padding: "4px 16px",
    },
    lg: {
      fontSize: "18px",
      padding: "8px",
    },
  },
});
