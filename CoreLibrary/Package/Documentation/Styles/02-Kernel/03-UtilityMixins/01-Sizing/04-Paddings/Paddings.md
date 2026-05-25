# `Paddings` mixin

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-pd-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The alternative to native CSS method of defining of the paddings intended to be used in customizable components development.

```
Paddings--YDF({

  all?: DataTypes--YDF.dimensionalQuantity;

  horizontalSymmetric?: DataTypes--YDF.dimensionalQuantity;
  left?: DataTypes--YDF.dimensionalQuantity;
  right?: DataTypes--YDF.dimensionalQuantity;

  verticalSymmetric?: DataTypes--YDF.dimensionalQuantity;
  upwardShifting?: DataTypes--YDF.dimensionalQuantity;
  bottom?: DataTypes--YDF.dimensionalQuantity;
  
})
```


## Examples

```stylus
.Example1

  // Equivalent to `padding: 3px`
  Paddings--YDF({ all: 3px })


.Example2

  // Equivalent to `padding-left: 4px; padding-right: 4px;`
  Paddings--YDF({ horizontalSymmetric: 4px })


.Example3

  // Equivalent to `padding-top: 5px; padding-bottom: 5px;`
  Paddings--YDF({ verticalSymmetric: 5px })

  
.Example4

  // Equivalent to `padding: 3px 2px 4px 1px;`
  Paddings--YDF({
    left: 1px,
    right: 2px,
    top: 3px,
    bottom: 4px
  })

.Example5

  // No single-line native equivalent. 
  // `padding: 1px 4px 0` will explicitly define bottom padding, while below mixin usage - no.  
  Paddings--YDF({
    top: 1px,
    horizontalSymmetric: 4px
  })
```


### `upwardShifting` property

`padding: 6px 0` does not mean that text between top and bottom paddings will be ideally centered: visually it will be
the offset about `1px`.  Moreover, this offset depending on the font and the language. 

`upwardShifting` allows to reduce the `top` padding to compensate this offset.

```stylus
.Example6
  
  Paddings--YDF({
    verticalSymmetric: 6px,
    upwardShifting: 1px
  })
```

The output CSS without PostCSS processing will be:

```css
.Example6 {
  padding-top: calc(6px - 1px);
  padding-bottom: 6px;
}
```
