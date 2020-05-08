export const theme = {
  spacing: {
    margins: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "25px",
      xl: "35px",
    },
    padding: {
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "25px",
      xl: "35px",
    },
    base: 8,
  },
  colors: {
    white: "#e5eaec",
    accent: "#ff286c",
    accentDark: "#E52461",
    accentLight: "#FF93B5",
    primary: "#45f9e5",
    primaryDark: "#30AE9F",
    primaryLight: "#B4FCF4",
    error: "red",
    warn: "red",
    success: "red",
  },
  fonts: {
    weights: {
      light: 100,
      normal: 300,
      bold: 700,
    },
    colors: {
      primary: "#333333",
      accent: "black",
      secondary: "#8B9FAC",
      white: "white",
    },
    family: "roboto",
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "24px",
      xxxl: "30px",
      xxxxl: "36px",
    },
  },
  roundness: "4px",
}

export type FontWeights = typeof theme.fonts.weights
export type FontColors = typeof theme.fonts.colors
export type FontSizes = typeof theme.fonts.sizes
export type Spacing = typeof theme.spacing
export type Colors = typeof theme.colors

export type ThemeType = typeof theme
