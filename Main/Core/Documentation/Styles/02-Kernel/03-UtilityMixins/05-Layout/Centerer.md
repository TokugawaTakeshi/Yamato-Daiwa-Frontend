# `Centerer--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-cnt-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Applying:

* The minimal width (default value: `GRID_MINIMAL_WIDTH`) and maximal width (default value `GRID_MAXIMAL_WIDTH`).
* `width: 100%` to make the element take maximal available horizontal space (but not more than `GRID_MAXIMAL_WIDTH`).
* Left and right `auto` margins for the centering

Intended to be user for the block elements.
Basically not need to use this mixin inside `flex` and `grid`.


## Examples

```stylus
.Layout
  
  &-Header

    // The minimal and maximal width will be GRID_MINIMAL_WIDTH and GRID_MAXIMAL_WIDTH respectively
    Centerer--YDF()

    
  &-Footer
    
    // Custom minimal and maximal widths
    Centerer--YDF({ minimalWidth: 420px, maximalWidth: 670px })
```
