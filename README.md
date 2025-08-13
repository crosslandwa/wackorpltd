# WAC Korp Ltd

Website for WAC Korp Ltd, built with [Svelte](https://svelte.dev/)

## Developing

After running `npm ci` start the dev server via

```sh
npm run dev
```

## Logo

Generate a SVG logo - here's the markup for the current one

```html
    <svg id="logo" width="300" height="300">
      <rect width="300" height="300" fill="#189" rx="50" ry="50" />
      <text x="35" y="150" fill="#111" font-size="10em" font-family="Monospace" font-weight="800">WAC</text>
      <text x="40" y="240" fill="#111" font-size="7em" font-family="Monospace" font-weight="800">Korp</text>
    </svg>
```

Then grab the svg content as a base64 encoded string

```js
`data:image/svg+xml;base64,${btoa(new XMLSerializer().serializeToString(document.getElementById("logo")))}`
```

Finally, place the generated string in the `href` attribute of the `<link rel="shortcut icon">` element in the `<head>` of the page

## Building

Build to the `/build` directory with

```sh
npm run build
```

## Deployment

This site is hosted on [Github Pages](https://crosslandwa.github.io/wackorpltd). Deployment happens on commit to the `main` branch via a Github Action.
- The site is statically rendered using `@sveltejs/adapter-static`
