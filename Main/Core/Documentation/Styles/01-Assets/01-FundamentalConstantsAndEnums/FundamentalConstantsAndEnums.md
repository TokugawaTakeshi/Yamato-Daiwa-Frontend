# Basic constants

Because the Stylus pre-processor does not allow to define the readonly variables, the **constant** term is *conventional*.


## `DataTypes--YDF` - Stylus Data Types

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-dt-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

![](DataTypes-LiveTemplateDemo.gif)

Pseudo enumeration including the data types related with supported by Stylus pre-processor data types.
Please note that it does *not* include possible returnable values of **typeof()** build-in function because 
**Yamato Daiwa Frontend** distinguishing the data types more precisely thus abstracting from Stylus native notations.
Frequently being used for parameters validation of mixins and functions. 

```stylus
DataTypes--YDF = {
  dimensionalQuantity: "DIMENSIONAL_QUANTITY"
  dimensionlessQuantity: "DIMENSIONLESS_QUANTITY",
  string: "STRING",
  boolean: "BOOLEAN",
  object: "OBJECT",
  colorDefinition: "COLOR_DEFINITION"
}
```

The notable types are **dimensionalQuantity** and **dimensionlessQuantity**. For the Stylus, both `typeof(2)` and `typeof(2px)`
are `unit` while sometimes dimensional amount only or dimensionless amount (AKA "unitless value" in CSS) only allowed.

The target of Live Template for this functionality is to compensate not implemented autocomplete for Stylus objects (hashes)
in IntelliJ IDEA.


## `NARROWEST_SCREEN_WIDTH_UNIT--YDF` - The Narrowest Screen Width Unit

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-nswu-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

![](NarrowestScreenWidthUnit-LiveTemplateDemo.gif)

`NARROWEST_SCREEN_WIDTH_UNIT--YDF` is equals **320px**.
It is the iPhone 5 screens width and currently just a small percentage of mobile devices has narrower than **320px** screens.

Is responsive/adaptive layout, the minimal grid width is frequently being set to `NARROWEST_SCREEN_WIDTH_UNIT--YDF` and maximal 
grid width is being frequently set to the multiple of `NARROWEST_SCREEN_WIDTH_UNIT--YDF`:

* `2 * NARROWEST_SCREEN_WIDTH_UNIT--YDF = 640px`
* `3 * NARROWEST_SCREEN_WIDTH_UNIT--YDF = 960px`
* `4 * NARROWEST_SCREEN_WIDTH_UNIT--YDF = 1280px`


## `SMALLEST_DIVISION_OF_CSS_PIXEL--YDF` - The Smallest Division of CSS Pixel

Unlike media queries where the difference between patterns could be `1(px)`, in the container queries the `1(px)` difference
  could cause the layout breaking.
So, the difference should be the `0.02(px)`, the smallest division of CSS pixel.
This value (without `px`) has been stored to `SMALLEST_DIVISION_OF_CSS_PIXEL--YDF` constant. 

See [this article](https://engineering.kablamo.com.au/posts/2023/media-queries-and-responsive-design/) for details. 
