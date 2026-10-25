Yes. An SVG can be used as the `src` of an HTML `<img>` element, but you must encode the SVG as a data URL. You cannot assign raw SVG markup directly to `src`.

For your `DummyImagesURIs` library, there is a better approach than Base64: use URL-encoded SVG data URLs, generated from ordinary SVG strings.

## 1. Use SVG markup with a `data:` URL

For example, this SVG describes a simple placeholder:

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#74b9ff"/>
  <text x="480" y="290" text-anchor="middle"
        font-size="64" fill="#888">960×540</text>
</svg>
```

The `src` value needs to look like this:

```
<img src="data:image/svg+xml,%3Csvg%20xmlns%3D...">
```

The SVG markup is URL-encoded, rather than Base64-encoded. This avoids the opaque, lengthy Base64 strings in your current implementation.

However, writing the encoded form manually is inconvenient. You can instead keep the SVG markup readable and encode it when initializing your library.

## 2. Recommended implementation

Define a small helper that converts readable SVG markup into a valid data URL:

```
const svgToDataURI = (svg) =>
  `data:image/svg+xml,${ encodeURIComponent(svg) }`;
```

Then define your placeholders using ordinary SVG markup:

```
const DummyImagesURIs = {

  aspectRatio19x6: svgToDataURI(`
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 960 540">
      <rect width="960" height="540" fill="#74b9ff"/>
      <text x="480" y="290"
            text-anchor="middle"
            font-size="64"
            fill="#888">960×540</text>
    </svg>
  `),

  aspectRatio4x3: svgToDataURI(`
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 960 720">
      <rect width="960" height="720" fill="#55efc4"/>
      <text x="480" y="380"
            text-anchor="middle"
            font-size="64"
            fill="#888">960×720</text>
    </svg>
  `),

  small: svgToDataURI(`
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#ff7675"/>
      <text x="32" y="36"
            text-anchor="middle"
            font-size="10"
            fill="#888">64×64</text>
    </svg>
  `)

};
```

Your existing Pug code remains unchanged:

```
img(src=DummyImagesURIs.aspectRatio19x6)
```

And so does your gallery iteration:

```
ul.DummyImagesURIsGallery

  each imageURI, key in YDF.DummyImagesURIs

    li

      button(
        aria-label=localization.copyingButtonAccessibilityGuidanceRawValue
      )

        span(
          role="presentation"
          style=`background-image: url("${ imageURI }");`
        )
```

You can keep your existing copying functionality, since each property is still a string containing a complete, reusable URI.

## 3. Why URL encoding instead of Base64?

| Aspect                 | Base64 data URL               | URL-encoded SVG                         |
| ---------------------- | ----------------------------- | --------------------------------------- |
| Readability            | Very poor                     | Original SVG remains readable in source |
| Size                   | Typically larger than raw SVG | Often smaller than Base64               |
| Browser support        | Supported                     | Supported                               |
| `<img src>`            | Yes                           | Yes                                     |
| CSS `background-image` | Yes                           | Yes                                     |
| External image files   | Not required                  | Not required                            |

Both formats are supported by modern browsers. URL encoding is particularly convenient for your case because the SVG remains editable directly in the source code.

One important distinction: the SVG markup itself is not a valid `src` value. It must first be converted into a `data:image/svg+xml,...` URI. Your helper does exactly that.

This approach also preserves your library's main design advantage: you can distribute `DummyImagesURIs` as part of your JavaScript package, without distributing separate image files or changing the gallery implementation.
