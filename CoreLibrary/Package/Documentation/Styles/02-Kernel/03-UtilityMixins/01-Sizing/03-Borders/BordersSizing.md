# `BordersSizing` mixin

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-bds-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The alternative to native CSS method of defining of the border width (thickness) and radius intended to be used in
customizable components development.

```
BordersSizing({

  thickness: {
  
    all: DataTypes.dimensionalAmount;

    horizontalSymmetric: DataTypes.dimensionalAmount;,
    left: DataTypes.dimensionalAmount;,
    right: DataTypes.dimensionalAmount;

    verticalSymmetric: DataTypes.dimensionalAmount; 
    top: DataTypes.dimensionalAmount;
    bottom: DataTypes.dimensionalAmount;
  },

  radius: {

    all: DataTypes.dimensionalAmount;

    topLeft: DataTypes.dimensionalAmount;
    topRight: DataTypes.dimensionalAmount;
    bottomLeft: DataTypes.dimensionalAmount;
    bottomRight: DataTypes.dimensionalAmount;
    
    leftFillets: DataTypes.dimensionalAmount;
    rightFillets: DataTypes.dimensionalAmount;
    topFillets: DataTypes.dimensionalAmount;
    bottomFillets: DataTypes.dimensionalAmount;
  }
})
```

## Examples

```stylus
.BordersTesting

  &-Thickness

    &-All

      // Equivalent of `border-width: 1px`
      BordersSizing({
        thickness: {
          all: 1px
        }
      })


    &-Symmetric

      // Equivalent of `border-width: 4px 6px`
      BordersSizing({
        thickness: {
          horizontalSymmetric: 4px,
          verticalSymmetric: 6px
        }
      })


    &-Separate

      // Equivalent of `border-width: 1px 2px 6px 4px`
      BordersSizing({
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
      BordersSizing({
        radius: {
          all: 6px
        }
      })


    &-LeftFillets

      // No single-line CSS equivalent. `border-radius: 6px 0 0 6px` applies explicit `0` while below mixin usage - no.
      BordersSizing({
        radius: {
          leftFillets: 6px
        }
      })


    &-RightFillets

      // No single-line CSS equivalent. `border-radius: 0 6px 6px 0` applies explicit `0` while below mixin usage - no.
      BordersSizing({
        radius: {
          rightFillets: 6px
        }
      })


    &-TopFillets

      // No single-line CSS equivalent. `border-radius: 6px 6px 0 0` applies explicit `0` while below mixin usage - no.
      BordersSizing({
        radius: {
          topFillets: 6px
        }
      })


    &-BottomFillets

      // No single-line CSS equivalent. `border-radius: 0 0 6px 6px` applies explicit `0` while below mixin usage - no.
      BordersSizing({
        radius: {
          bottomFillets: 6px
        }
      })


    &-Separate

      // Equivalent of `border-radius: 1px 2px 3px 4px`
      BordersSizing({
        radius: {
          topLeft: 1px,
          topRight: 2px,
          bottomLeft: 3px,
          bottomRight: 4px
        }
      })
```
