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
  },
  li: {
    paddingLeft: "0.25rem",
    marginLeft: "0.5rem",
    marginBottom: "0.25rem",
  },
  "li::marker": {
    color: "fg.text",
    content: "'🐼'",
  },
  code: {
    backgroundColor: "bg.surface",
    fontFamily: "monospace",
    padding: "3px 5px",
    borderRadius: "4px",
    boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)"
  },
  h1: {
    fontSize: "x-large",
    paddingBlock: 5
  }
});