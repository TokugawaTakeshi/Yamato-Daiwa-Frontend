# `fillBodyVertically--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-fbv-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
fillBodyVertically--YDF({ verticalScrolling: boolean })
```

* Fills `<body>` when `<body>` and `<html>` takes 100% of viewport's height as minimum.
* Intended to be applied to direct `<body>`'s child.

## Examples

To fill the `<body>` with available vertical scrolling, add

```stylus
.BodyChildWithVerticalScrolling

  fillBodyVertically--YDF({ verticalScrolling: true })
```

This code will be compiled to:

```css
.BodyChildWithVerticalScrolling {
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}
```

To fill the `<body>` and forbid the vertical scrolling, add

```stylus
.BodyChildWithoutVerticalScrolling

  fillBodyVertically--YDF({ verticalScrolling: false })
```

This code will be compiled to:

```css
.BodyChildWithoutVerticalScrolling {
  height: 100%;
  max-height: 100%;
  overflow-y: hidden;
}
```


## Why not `height: 100vh`

Because `vh` are not cross-platform. `vh` does not respect the search bars in some mobile browsers.
Although there are some workarounds like `-webkit-fill-available`, they are not working everywhere.
