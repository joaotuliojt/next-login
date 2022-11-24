import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      grayLight: "#F7FAFC",
      grayDark: "#E8E8E8",
      green: "#04C35C",
      black: "#1A202C",
      blue: "#2B6CB0"
    },
    fonts: {
      serif: `Merriweather, serif`,
      sansSerif: `Lato, sans-serif`,
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "26px"
    }
  },
  media: {
    bp1: "(max-width: 960px)"
  }
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  a: {
    textDecoration: "none"
  }
})