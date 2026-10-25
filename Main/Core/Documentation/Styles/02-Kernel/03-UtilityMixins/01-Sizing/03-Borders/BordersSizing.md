# `BordersSizing--YDF` mixin

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-bds-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The alternative to native CSS method of defining of the border width (thickness) and radius intended to be used in
customizable components development.

```
BordersSizing--YDF({

  thickness: {
  
    all: DataTypes--YDF.dimensionalQuantity;

    horizontalSymmetric: DataTypes--YDF.dimensionalQuantity;,
    left: DataTypes--YDF.dimensionalQuantity;,
    right: DataTypes--YDF.dimensionalQuantity;

    verticalSymmetric: DataTypes--YDF.dimensionalQuantity; 
    top: DataTypes--YDF.dimensionalQuantity;
    bottom: DataTypes--YDF.dimensionalQuantity;
  },

  radius: {

    all: DataTypes--YDF.dimensionalQuantity;

    topLeft: DataTypes--YDF.dimensionalQuantity;
    topRight: DataTypes--YDF.dimensionalQuantity;
    bottomLeft: DataTypes--YDF.dimensionalQuantity;
    bottomRight: DataTypes--YDF.dimensionalQuantity;
    
    leftFillets: DataTypes--YDF.dimensionalQuantity;
    rightFillets: DataTypes--YDF.dimensionalQuantity;
    topFillets: DataTypes--YDF.dimensionalQuantity;
    bottomFillets: DataTypes--YDF.dimensionalQuantity;
  }
})
```

## Examples

```stylus
.BordersTesting

  &-Thickness

    &-All

      // Equivalent of `border-width: 1px`
      BordersSizing--YDF({
        thickness: {
          all: 1px
        }
      })


    &-Symmetric

      // Equivalent of `border-width: 4px 6px`
      BordersSizing--YDF({
        thickness: {
          horizontalSymmetric: 4px,
          verticalSymmetric: 6px
        }
      })


    &-Separate

      // Equivalent of `border-width: 1px 2px 6px 4px`
      BordersSizing--YDF({
        thickness: {
          top: 1px,
          left: 2px,
          right: 4px,
          bottom: 6px
        }
      })


  &-Radius

    &-All

      // Equivalent of `border-radius: 6px`
      BordersSizing--YDF({
        radius: {
          all: 6px
        }
      })


    &-LeftFillets

      // No single-line CSS equivalent. `border-radius: 6px 0 0 6px` applies explicit `0` while below mixin usage - no.
      BordersSizing--YDF({
        radius: {
          leftFillets: 6px
        }
      })


    &-RightFillets

      // No single-line CSS equivalent. `border-radius: 0 6px 6px 0` applies explicit `0` while below mixin usage - no.
      BordersSizing--YDF({
        radius: {
          rightFillets: 6px
        }
      })


    &-TopFillets

      // No single-line CSS equivalent. `border-radius: 6px 6px 0 0` applies explicit `0` while below mixin usage - no.
      BordersSizing--YDF({
        radius: {
          topFillets: 6px
        }
      })


    &-BottomFillets

      // No single-line CSS equivalent. `border-radius: 0 0 6px 6px` applies explicit `0` while below mixin usage - no.
      BordersSizing--YDF({
        radius: {
          bottomFillets: 6px
        }
      })


    &-Separate

      // Equivalent of `border-radius: 1px 2px 3px 4px`
      BordersSizing--YDF({
        radius: {
          topLeft: 1px,
          topRight: 2px,
          bottomLeft: 3px,
          bottomRight: 4px
        }
      })
```
