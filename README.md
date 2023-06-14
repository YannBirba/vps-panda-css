# vite-plugin-ssr with Panda CSS

This is a demo of how to use [vite-plugin-ssr](https://vite-plugin-ssr.com/) with [Panda css](https://twitter.com/panda__css).

This is a very simple example just to show the integration between the two libraries and how to make a simple dark the theme ssr compatible.

## How to use

### Install dependencies

I used [pnpm](https://pnpm.io/) to install the dependencies, but you can use npm or yarn as well.

```bash
pnpm install
```

or

```bash
yarn install
```

or

```bash
npm install
```

### Run dev server

Use the "dev" script from package.json, be sure to have the 3000 port available.

### Build

Use the "build" script from package.json, the build will be in the "dist" folder.
By default this example is using prerendering, you can change this in the "vite.config.js" file.

### Run

Use the "server:prod" to run the server in production mode. or use the "prod" script to build and run the server.

## How it works

It use the @pandacss/dev with postcss library to generate the css.
The app include a small script to apply the user preference for the theme before page load.
The theme is stored in the localStorage and the user can change it by clicking on the button in the navbar.

The styled-system directory was generate by pandacss with the command:

```bash
npx panda init
```

Then just need to add the pandacss base layers to an index.css file, import it in your app and you are good to go.

This app shows a really small example of what you can do with the theming file from pandacss "panda.config.ts" like variants and semanticTokens.

## Features

- Panda CSS
- Dark theme
- Theming
- Variant example
- Prerendering by default (can be disabled in vite.config.js)
- Server Side Rendering is possible as well
- TypeScript
- Client routing provided by [vite-plugin-ssr](https://vite-plugin-ssr.com/)

## Contributing

I made this without any documentation, Pull requests and issues are welcome 😊!
