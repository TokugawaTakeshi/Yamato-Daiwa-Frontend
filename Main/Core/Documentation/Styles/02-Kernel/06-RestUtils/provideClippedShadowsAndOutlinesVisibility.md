# `provideClippedShadowsAndOutlinesVisibility--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-pcsaov-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
provideClippedShadowsAndOutlinesVisibility--YDF({
     
  requiredHorizontalSymmetricSpace?: DataTypes--YDF.unit,
  // OR
  requiredSpaceAtLeft?: DataTypes--YDF.unit,
  requiredSpaceAtRight?: DataTypes--YDF.unit,
  
  requiredVerticalSymmetricSpace?: DataTypes--YDF.unit,
  // OR
  requiredSpaceAtTop?: DataTypes--YDF.unit,
  requiredSpaceAtBottom?: DataTypes--YDF.unit,
  
  noCompensatingNegativeTopMargins?: DataTypes--YDF.boolean,
  noCompensatingNegativeBottomMargins?: DataTypes--YDF.boolean,
  noCompensatingNegativeLeftMargins?: DataTypes--YDF.boolean,
  noCompensatingNegativeRightMargins?: DataTypes--YDF.boolean,
  
  useBeforePseudoElementWithCompensatingNegativeTopMargins?: DataTypes--YDF.boolean,
  useAfterPseudoElementWithCompensatingNegativeBottomMargins?: DataTypes--YDF.boolean
})
```

Defines the paddings in target container which is implied to have`overflow: hidden` compensated with negative
margins to make the truncated shadow and/or outline of child elements visible.


## Problem overview

In the container with `overflow: hidden` (or other `overflow`-properties explicitly or implicitly hiding the overhanging
content), the shadows/outlines of children elements will be truncated if the children are touching with parent's edges:

![](https://i.stack.imgur.com/7br9K.png)

The common solution is adding the paddings to parent's container. It's a valid CSS, but there are some methodological issues:

1. The `paddings` are the **geometry** while the `box-shadow` and `outline` are the **decoration** which does not affect  
   to the document flow regardless of their thickness. In that way, the decoration forces to change the geometry.
2. The `paddings` are the parent's geometry while the `box-shadow` or `outline` is the children's decoration.
   In the component-oriented methodologies, the properties of the reusable components like buttons are **encapsulated**
   and ever could be dynamic. Moreover, developing the controls like buttons, we don't know at advance in which
   container these controls will be used.
   But here, we need to know the thickness of the button's `box-shadow`/`outline` to setup the appropriate paddings of
   the parent.

Also, what if we have the multiple types of buttons with different shadows?
What if the buttons are mixed with other elements with other shadows?
What if the shadows are theme-dependent?

Currently, the CSS does not respond to this demand, so whatever `provideClippedBoxShadowVisibility` solution is ugly,
there are still no working alternatives.

[📖 Related topic on Stack Overflow](https://stackoverflow.com/q/64852741/4818123)


## Usage example

```stylus
Button = {
  outlineWidth: 2px
}

.Button

  &:focus

    outline: Button.outlineWidth solid gold


.Dialog

  &-Header

    // ...


  &-MainSection

    max-height 300px
    overflow-y hidden


  &-ButtonsBar

    provideClippedShadowsAndOutlinesVisibility--YDF({
      requiredHorizontalSymmetricSpace: Button.outlineWidth,
      requiredSpaceAtBottom: Button.outlineWidth
    })
```

With above options, `provideClippedShadowsAndOutlinesVisibility--YDF` adds negative margins to left, right and bottom and
corresponding paddings:

```css
.Button:focus {
  outline: 2px solid gold;
}

.Dialog-MainSection {
  max-height: 300px;
  overflow-y: hidden;
}

.Dialog-ButtonsBar {
  margin-bottom: -2px;
  margin-left: -2px;
  margin-right: -2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
}
```
