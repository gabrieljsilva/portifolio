import { Theme } from "../../theme";

export const mainTheme = new Theme({
  fontFamily: ["Roboto", "Sans Serif"],
  fonts: {
    title: "Roboto",
    subtitle: "Roboto",
    body: "Sans Serif",
  },
  fontSizes: {
    title: "2.5rem",
    subtitle: "1.75rem",
    body: "1rem",
  },
  fontWeights: {
    title: "600",
    subtitle: "400",
    body: "100",
  },
  colors: {
    light: {
      main: "white",
      contrast: "",
    },
    primary: {
      main: "#F72585",
      contrast: "",
    },
    secondary: {
      main: "#7209B7",
      contrast: "",
    },
    success: {
      main: "",
      contrast: "",
    },
    info: {
      main: "",
      contrast: "",
    },
    warning: {
      main: "",
      contrast: "",
    },
    danger: {
      main: "",
      contrast: "",
    },
    grayscale: {
      G10: "",
      G20: "",
      G30: "",
      G40: "",
      G50: "",
      G60: "",
      G70: "",
      G80: "",
      G90: "",
    },
  },
});
