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
  <rect width="300" height="300" fill="#EEE" rx="50" ry="50" />
  <text x="35" y="150" fill="#189" font-size="10em" font-family="Monospace" font-weight="800">WAC</text>
  <text x="40" y="240" fill="#189" font-size="7em" font-family="Monospace" font-weight="800">Korp</text>
</svg>
```

Then run the following in the dev tools to convert the SVG to a 64 x 64 pixel `.ico` file (which the browser will download via a prompt)

```js
const imageData = new XMLSerializer().serializeToString(document.getElementById("logo"))
const img = document.createElement('img');
img.onload = () => {
  const canvas = document.createElement('canvas');
  const SIZE_IN_PIXELS = 64
  canvas.width = SIZE_IN_PIXELS;
  canvas.height = SIZE_IN_PIXELS;
  canvas.getContext('2d').drawImage(img, 0, 0, SIZE_IN_PIXELS, SIZE_IN_PIXELS);
  canvas.toBlob(
    (imgBlob) => {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(new Blob(
        [
          new Uint8Array([0, 0, 1, 0]).buffer, // ico file header
          new Uint8Array([1, 0]).buffer, // Indiciate 1 image [01, 00]
          new Uint8Array([canvas.width]).buffer, // Image width
          new Uint8Array([canvas.height]).buffer, // Image height
          new Uint8Array([0]).buffer, // Specify no color palette [00]
          new Uint8Array([0]).buffer, // Reserved space [00]
          new Uint8Array([1, 0]).buffer, // Specify 1 color plane
          new Uint8Array([32, 0]).buffer, // Specify 32 bits per pixel (bit depth)
          new Uint32Array([imgBlob.size]).buffer, // Specify image size in bytes
          new Uint32Array([22]).buffer, // Specify image offset in bytes
          imgBlob
        ],
        { type: 'image/vnd.microsoft.icon' }
      ));
      downloadLink.download = "favicon.ico";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
    'image/png'
  );
};
console.log(`<link rel="shortcut icon" type="image/x-icon" href="data:image/svg+xml;base64,${btoa(imageData)}">`)
img.src = URL.createObjectURL(new Blob([imageData], {type:"image/svg+xml;charset=utf-8"}));
```

Finally
- copy the `<link>` that is output to the console into the `<head>` of the HTML template (this includes an embedded svg favicon)
- copy the downloaded file to `/static/favicon.ico`

## Building

Build to the `/build` directory with

```sh
npm run build
```

## Deployment

This site is hosted on [Github Pages](https://crosslandwa.github.io/wackorpltd). Deployment happens on commit to the `main` branch via a Github Action.
- The site is statically rendered using `@sveltejs/adapter-static`
