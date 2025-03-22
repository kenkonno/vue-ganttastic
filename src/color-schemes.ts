import type { Color } from "csstype"

export type ColorScheme = {
  primary: Color
  secondary: Color
  ternary: Color
  quartenary: Color
  hoverHighlight: Color
  text: Color
  background: Color
  toast?: Color
}

export const colorSchemes = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgb(243 238 226)",
    text: "#404040",
    background: "white"
  },

  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgb(243 238 226)",
    text: "#542d05",
    background: "white"
  },

  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },

  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },

  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },

  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },

  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },

  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },

  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgb(243 238 226)",
    text: "#022c47",
    background: "white"
  },

  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgb(243 238 226)",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },

  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  }
} as Record<string, ColorScheme>

export type ColorSchemeKey = keyof typeof colorSchemes

export default colorSchemes
