import { Theme } from "../../theme";

export const mainTheme = new Theme({
  fontFamily: ["Roboto", "Sans Serif"],
  fonts: {
    title: "Roboto",
    subtitle: "Roboto",
    body: "Sans Serif",
    thinTitle: "Roboto",
  },
  fontSizes: {
    title: "2.5rem",
    subtitle: "1.75rem",
    body: "1rem",
    thinTitle: "2.5rem",
  },
  fontWeights: {
    title: "600",
    subtitle: "400",
    body: "100",
    thinTitle: "100",
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
