# SingleLineTextElementOverflowSafety--YDF

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-slteos-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
SingleLineTextElementOverflowSafety--YDF({
  displayEllipsis?: DataTypes--YDF.boolean;
  supportCrossAxisCenteredFlexChild?: DataTypes--YDF.boolean;
  lineHeight?: DataTypes--YDF.dimensionalQuantity | DataTypes--YDF.dimensionlessQuantity;
  verticalSymmetricPaddings?: DataTypes--YDF.dimensionalQuantity;
})
```

Applying `overflow: hidden`, `white-space: nowrap` and `text-overflow: clip` (or `ellipsis` when parameter `displayEllipsis`
is `true`) which basically (see [caveats](#Caveats) sections) allows to prevent the horizontal overflowing by text without
spaces (like `foobarbazhogefuga` and so on).

```
.NameLabel

  SingleLineTextElementOverflowSafety--YDF({ displayEllipsis: true })
```


## Caveats

Works perfectly inside the table cells (by the way, the `TableCellWidthSizing--YDF` using the `SingleLineTextElementOverflowSafety--YDF`
when option `truncateOnOverflow` is `true`) and elements with vertical paddings like buttons. Unfortunately the CSS limitations
does not allow to make this mixin working in all cases and intuitive.

### Flex

When the parent element is a flexbox (`display: flex | inline-flex`) of `column` direction and have `align-items: center`,
just above CSS Properties (`overflow`, `white-space` and `text-overflow`) will not be enough to prevent the overflow on
target single-line element (from now: label). Same if the label has `align-self: center`.

One solution is make the label `align-self: stretch` and add `text-align: center`.
But this solution is anti-intuitive and sometimes could not be used because of design (e. g. when the label is underlined).

Other solution is add `max-width: 100%` to label. This what `supportCrossAxisCenteredFlexChild: true` parameter doing. 


### Grid with equal-withs columns

To prevent the overflow in grid layout (`display: grid | inline-grid`) with equal-width columns where the grandchildren 
elements using `SingleLineTextElementOverflowSafety--YDF` (for example, the card is the child element and it's labels are 
grandchildren elements), it's required to use `minmax` function: 

```stylus
.GridLayout

  display grid
  
  // Will not prevent overflow even grandchildren has `SingleLineTextElementOverflowSafety--YDF`:
  // grid-template-columns repeat(2, 1fr); 

  // It will prevent overflow if grandchildren elements has `SingleLineTextElementOverflowSafety--YDF`
  grid-template-columns repeat(2, minmax(0, 1fr));
```


### Handing over character truncating

As is obvious and MUST BE obvious from the mixin name, `SingleLineTextElementOverflowSafety--YDF` is for single-line elements
only. The logically right methodology is set the height of this line height equals to font-size. However, it to do it,
because of `overflow: hidden` the tails of hanging characters (like `g` of `j`) will be cut off.

Actually we need to hide the overflow only horizontally (`overflow-x: hidden` and `overflow-y: visible`), but this 
combination does not work:

> The computed values of ‘overflow-x’ and ‘overflow-y’ are the same as their specified values, except that some combinations 
> with ‘visible’ are not possible: if one is specified as ‘visible’ and the other is ‘scroll’ or ‘auto’, then ‘visible’ 
> is set to ‘auto’. The computed value of ‘overflow’ is equal to the computed value of ‘overflow-x’ if ‘overflow-y’ is 
> the same; otherwise it is the pair of computed values of ‘overflow-x’ and ‘overflow-y’.
> 
> [W3C specification](https://www.w3.org/TR/css-box-3/#overflow-x)

This problem has been discussed in [Keep hanging characters visible in spite of `line-height: 1` and `overflow: hidden`](https://stackoverflow.com/questions/68667208/keep-hanging-characters-visible-in-spite-of-line-height-1-and-overflow-hidd)
topic of the StackOverflow and looks like there is no perfect solution.

First option is increase line-height or vertical paddings. You can do it as usual or specify the appropirate options
of mixin:

```stylus
.NameLabel
  
  SingleLineTextElementOverflowSafety--YDF({
    displayEllipsis: true,
    lineHeight: 1.2
  })
```

The disadvantage are troubles with precise vertical spaces defining.

Another option is [OverflowSafeSingleLineLabel](../../../Components/OverflowSafeSingleLineLabel/OverflowSafeSingleLineLabel.md)
component.
