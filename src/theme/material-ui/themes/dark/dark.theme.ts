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
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
        },
      },
    },
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

    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          transform: "none",
          fontSize: "13px",
          fontWeight: "700",
          borderColor: "transparent",
          color: "#9FA2B4",
          letterSpacing: "0.3px",
        },
        standard: {
          border: "1px solid red",
        },
      },
      defaultProps: {
        shrink: true,
        variant: "outlined",
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          "& .MuiInputBase-input": {
            height: "12px",
          },
        },
        option: {
          fontSize: "16px",
          fontWeight: "400",
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          border: "1px solid #767676",
          backgroundColor: "white",
          "> input": {
            borderRadius: "4px",
            padding: "0.5rem",
            paddingTop: "0.5rem",
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              transition: "border-color .3s ease-in-out",
              borderColor: muiDarkPalette.primary.main,
            },
            "&.Mui-focused fieldset": {
              transition: "border-color .3s ease-in-out",
              borderColor: muiDarkPalette.primary.main,
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginTop: 12,
          backgroundColor: "#F2F2F2",
          outline: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #e5e5e5",
            borderRadius: "4px",
            outline: "none",
          },
        },
        input: {
          fontSize: "12px",
        },
        inputSizeSmall: {
          padding: "10px",
        },
      },
      defaultProps: {
        notched: false,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "0",
          marginTop: "0",
        },
      },
    },
  },
});
