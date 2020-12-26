import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteColorOptions } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

const palette = {
  primary: {
    light: "#ffffff",
    main: "#a8a8a8",
    dark: "#4E4E4E",
  },
  secondary: {
    light: "#E0FBFC",
    main: "#98C1D9",
    dark: "#293241",
  },
  tertiary: {
    light: "#fda690",
    main: "#EE6C4D",
    dark: "#fc481e",
  },
  error: "#b20300",
  success: "#00b206",
  info: "#00b8ff",
};

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    tertiary: PaletteColor;
  }

  export interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
}

const generatedPalette = createMuiTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    error: {
      main: palette.error,
    },
    success: {
      main: palette.success,
    },
    info: {
      main: palette.info,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const theme = createMuiTheme({
  ...generatedPalette,
  spacing: 8,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1400,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
  },
});

export default theme;
