import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./globalCss";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./renderer/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  globalCss,

  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "#f6f5f5" },
          100: { value: "#ececec" },
          200: { value: "#d0cfcf" },
          300: { value: "#b3b2b2" },
          400: { value: "#7b7978" },
          500: { value: "#423f3e" },
          600: { value: "#3b3938" },
          700: { value: "#322f2f" },
          800: { value: "#282625" },
          900: { value: "#201f1e" },
        },
        /* Shades generated using https://javisperez.github.io/tailwindcolorshades */
        'candy-corn': {
          50: { value: "#fffef7" },
          100: { value: "#fffef0" },
          200: { value: "#fcfad4" },
          300: { value: "#faf4b9" },
          400: { value: "#f7ec88" },
          500: { value: "#f6e458" },
          600: { value: "#dbc246" },
          700: { value: "#b89832" },
          800: { value: "#947121" },
          900: { value: "#6e4c12" },
          950: { value: "#472c07" },
        }
      },
    },
    semanticTokens: {
      colors: {
        fg: {
          text: {
            value: { base: "{colors.gray.900}", _dark: "{colors.gray.100}" },
          },
          heading: {
            value: { base: "{colors.gray.900}", _dark: "{colors.gray.50}" },
          },
          muted: {
            value: { base: "{colors.gray.500}", _dark: "{colors.gray.400}" },
          },
        },
        bg: {
          surface: {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.900}" },
          },
          muted: {
            value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
          },
          accent: {
            value: {
              base: "{colors.candy-corn.500}",
              _dark: "{colors.candy-corn.300}",
            },
          },
          link: {
            default: {
              value: { base: "{colors.candy-corn.500}", _dark: "{colors.candy-corn.300}" },
              hover: {
                value: { base: "{colors.candy-corn.600}", _dark: "{colors.candy-corn.400}" },
              },
              dark: {
                value: { base: "{colors.candy-corn.300}", _dark: "{colors.candy-corn.500}" },
                hover: {
                  value: { base: "{colors.candy-corn.400}", _dark: "{colors.candy-corn.600}" },
                },
              },
            },
            highlight: {
              value: { base: "{colors.candy-corn.500}", _dark: "{colors.candy-corn.300}" },
              hover: {
                value: { base: "{colors.candy-corn.800}", _dark: "{colors.candy-corn.100}" },
              },
              dark: {
                value: { base: "{colors.candy-corn.200}", _dark: "{colors.candy-corn.700}" },
                hover: {
                  value: { base: "{colors.candy-corn.100}", _dark: "{colors.candy-corn.800}" },
                },
              },
            },
          },
        },
      },
    },
        recipes: {
          link: {
            name: "link",
            description: "A link",
            base: {
              cursor: "pointer",
              paddingBlock: 3,
              paddingInline: 10,
              color: "fg.text",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease-in-out",
            },
            variants: {
              variant: {
                navLink: {
                  backgroundColor: "transparent",
                  _hover: {
                    color: "#000",
                    backgroundColor: "bg.link.highlight",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)",
                  },
                  _active: {
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)",
                    color: "#000",
                    backgroundColor: "bg.link.highlight",
                  },
                },
                unstyled: {
                  color: "inherit",
                  textDecoration: "underline",
                },
              },
            },
            defaultVariants: {
              variant: "navLink",
            },
          },
    },
  },
});
