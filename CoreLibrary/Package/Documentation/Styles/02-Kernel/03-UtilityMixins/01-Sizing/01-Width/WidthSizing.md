# `widthSizing` - the defining of element's width 

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-ws-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
WidtnSizing(parametersObject: {
  fixedWidth?: DataTypes--YDF.dimensionalQuantity;
  minimalWidth?: DataTypes--YDF.dimensionalQuantity;
  maximalWidth?: DataTypes--YDF.dimensionalQuantity;
  takeMaximumSpaceAsPossible?: DataTypes--YDF.boolean;
  truncateOnOverflow?: DataTypes--YDF.boolean;
  displayEllipsisOnOverflow?: DataTypes--YDF.unit;
  leftOrRightSymmetricBordersWidths?: DataTypes--YDF.dimensionalQuantity;
  leftBorderWidth?: DataTypes--YDF.dimensionalQuantity;
  rightBorderWidth?: DataTypes--YDF.dimensionalQuantity;
  isExplicitBorderNoneDeclarationRequired?: DataTypes--YDF.unit;
  leftOrRightSymmetricPaddings?: DataTypes--YDF.dimensionalQuantity;
  leftPadding?: DataTypes--YDF.dimensionalQuantity;
  rightPadding?: DataTypes--YDF.dimensionalQuantity;
  isExplicitPaddingZeroDeclarationRequired?: DataTypes--YDF.boolean;
})
```

Alternative to native CSS approach of width specifying intended to be used in frameworks development 
(especially GUI component customization).
It is implied that all of above values are unknown at advance and will be defined by library user.


## Typical use cases

### Define fixed width

```stylus
.Element1

  WidthSizing--YDF({ fixedWidth: 120px })
```

will be transpiled to

```css
.Element1 {
  width: 120px;
}
```


### Define minimal and maximal width

```stylus
.Element2-1

  WidthSizing--YDF({
    minimalWidth: 120px,
    maximalWidth: 240px
  })
```

will be transpiled to:

```css
.Element2-1 {
  min-width: 120px;
  max-width: 240px;
}
```

Add `takeMaximumSpaceAsPossible: true` to make `.Element2-1` take `240px` while parent element has enough horizontal space.

```stylus
.Element2-2

  WidthSizing--YDF({
    minimalWidth: 120px,
    maximalWidth: 240px,
    takeMaximumSpaceAsPossible: true
  })
```

will be transpiled to:

```css
.Element2-2 {
  min-width: 120px;
  max-width: 240px;
  width: 100%;
}
```

The combination of these properties could confuse the novice engineers, while `takeMaximumSpaceAsPossible` explicitly
declares the engineer's intentions.

Please note that `fixedWidth` is incompatible with `minimalWidth`, `maximalWidth` and `takeMaximumSpaceAsPossible` and vice versa.


### Define symmetric borders and paddings

```stylus
.Element3

  WidthSizing--YDF({
    leftOrRightSymmetricBordersWidths: 1px,
    leftOrRightSymmetricPaddings: 8px
  })
```

will be transpiled to:

```css
.Element3 {
  border-left-width: 1px;
  border-right-width: 1px;
  padding-left: 8px;
  padding-right: 8px;
}
```


### Define left/right borders and paddings separately

```stylus
.Element4

  WidthSizing--YDF({
    leftBorderWidth: 1px,
    rightBorderWidth: 2px,
    leftPadding: 8px,
    rightPadding: 12px
  })
```

will be transpiled to:

```css
.Element4 {
  border-left-width: 1px;
  border-right-width: 2px;
  padding-left: 8px;
  padding-right: 12px;
}
```


### Disabling of borders and paddings

Some elements, e. g. `button`s or `input`s has browser-dependent borders and paddings.
Below ruleset will not change them.

```stylus
.Element5-0
  
  WidthSizing--YDF({ fixedWidth: 200px })
```

If you want set the paddings at appropriate side to `none` when `leftBorderWidth`, `rightBorderWidth` or 
`leftOrRightSymmetricBordersWidths` are implicit `null` (it means "not specified" for Stylus) or explicit `null`,
set `isExplicitBorderNoneDeclarationRequired` flag to `true`.

There is similar flag `isExplicitPaddingZeroDeclarationRequired` for paddings, but when `leftPadding`, `rightPadding`
or `leftOrRightSymmetricPaddings` are `null` the appropriate CSS property will be set to `0`.

```stylus
.Element5-1

  WidthSizing--YDF({
    fixedWidth: 200px,
    isExplicitBorderNoneDeclarationRequired: true,
    isExplicitPaddingZeroDeclarationRequired: true
  })
```

will be transpiled to:

```stylus
.Element5-1 {
  width: 200px;
  border-left: none;
  border-right: none;
  padding-left: 0;
  padding-right: 0;
}
```

In below example, left border width and right padding width will be applied while right border will be set to `none` 
and left padding - to 0:

```stylus
.Element5-2

  WidthSizing--YDF({
    leftBorderWidth: 1px,
    isExplicitBorderNoneDeclarationRequired: true,
    rightPadding: 12px,
    isExplicitPaddingZeroDeclarationRequired: true
  })
```

will be transpiled to:

```css
.Element5-3 {
  border-left-width: 1px;
  border-right: none;
  padding-left: 0;
  padding-right: 12px;
}
```
