import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    _dark: {
      colorScheme: "dark",
    },
  },
  body: {
    margin: 0,
    fontFamily: "sans-serif",
    backgroundColor: "bg.muted",
    color: "fg.text",
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  },
  "*": {
    boxSizing: "border-box",
  },
  a: {
    textDecoration: "none",
  },
  ".panda-theme-toggle-button": {
    _before: {
      content: "'☀️'",
      filter: "brightness(0)",
    },
  },
  ".dark .panda-theme-toggle-button": {
    _before: {
      content: "'🌙'",
      filter: "brightness(0)",
    },
  }
});