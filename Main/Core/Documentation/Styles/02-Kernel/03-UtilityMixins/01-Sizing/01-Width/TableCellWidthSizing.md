# `TableCellWidthSizing--YDF`

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-tcws-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
TableCellWidthSizing--YDF({

  fixedTotalWidth?: DataTypes--YDF.dimensionalQuantity;
  // OR
  totalMinimalWidth?: DataTypes--YDF.dimensionalQuantity;
  totalMaximalWidth?: DataTypes--YDF.dimensionalQuantity;
  
  fixedContentWidth?: DataTypes--YDF.dimensionalQuantity;
  // OR
  contentMinimalWidth: DataTypes--YDF.dimensionalQuantity;
  contentMaximalWidth: DataTypes--YDF.dimensionalQuantity;
  
  leftOrRightSymmetricBordersWidths?: DataTypes--YDF.dimensionalQuantity;
  // OR
  leftBorderWidth?: DataTypes--YDF.dimensionalQuantity;
  rightBorderWidth?: DataTypes--YDF.dimensionalQuantity;
  
  leftOrRightSymmetricPaddings: DataTypes--YDF.dimensionalQuantity;
  // OR
  leftPadding: DataTypes--YDF.dimensionalQuantity;
  rightPadding: DataTypes--YDF.dimensionalQuantity;
  
  truncateOnOverflow?: DataTypes--YDF.boolean;
  displayEllipsisOnOverflow?: DataTypes--YDF.boolean;
})
```

Allows to define the width, borders and paddings of table cell by various combinations of properties.
For example, you can specify the required horizontal space between left and right paddings, then the cell width
will be computed based of this space, paddings and borders.

> :memo: **Note:**  
> Because to define the table's column width it's required to define one of its cell width, the *cell width*
and *column width* cold be equivalent. Herewith the defining of different width of cells same column is incorrect
from the viewpoint of HTML/CSS.

> :memo: **Note:**  
> Before define the table geometry, be sure that [`table-layout`](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) 
property has been set to desired value (`fixed` for defining the column width by first cell of this column). 


## Frequent pattens
### Fixed total cell width 

```stylus
.TableCell1

  TableCellWidthSizing--YDF({
    fixedTotalWidth: 220px,
    leftBorderWidth: 1px,
    leftPadding: 6px,
    rightPadding: 8px,
    rightBorderWidth: 2px
  })
```

> :warning: **Warning:**
> Do not set fixed total width to each cell (column) because will become unresponsive!
It's recommended to set the fixed width for narrow cells (columns) only.


### Compute cell width based on content, border and paddings widths

The `fixedContentWidth` is how much horizontal space you need between left and right paddings.
The `width` property will be computed basing on `fixedContentWidth` and paddings and/or borders widths.

```stylus
.TableCell2-1

  TableCellWidthSizing--YDF({
    fixedContentWidth: 120px,
    leftBorderWidth: 1px,
    leftPadding: 6px,
    rightPadding: 8px,
    rightBorderWidth: 2px
  })
```

will be compiled to:

```css
.TableCell2-1 {
  width: calc(120px + 1px + 2px + 6px + 8px);
  border-left-width: 1px;
  border-right-width: 2px;
  padding-left: 6px;
  padding-right: 8px;
}
```

The PostCSS plugins could reduce the value of `width`.
You can mix the difference units:

```stylus
.TableCell2-2

  TableCellWidthSizing--YDF({
    fixedContentWidth: 10ch,
    leftBorderWidth: 1px,
    leftPadding: 0.75rem,
    rightPadding: 0.45rem,
    rightBorderWidth: 2px
  })
```

will be compiled to:

```css
.TableCell2-2 {
  width: calc(10ch + 1px + 2px + 0.75rem + 0.45rem);
  border-left-width: 1px;
  border-right-width: 2px;
  padding-left: 0.75rem;
  padding-right: 0.45rem;
}
```

### Minimal and maximal content width

```stylus
.TableCell3

  TableCellWidthSizing--YDF({
    contentMinimalWidth: 120px,
    contentMaximalWidth: 140px,
    leftBorderWidth: 1px,
    leftPadding: 6px,
    rightPadding: 8px,
    rightBorderWidth: 2px
  })
```

In this case:

* `min-width` will be computed basing on specified `contentMinimalWidth`, borders, and paddings
* `max-width` will be computed basing on specified `contentMaximalWidth`, borders, and paddings

The output:

```css
.TableCell3 {
  min-width: calc(120px + 1px + 2px + 6px + 8px);
  max-width: calc(140px + 1px + 2px + 6px + 8px);
  border-left-width: 1px;
  border-right-width: 2px;
  padding-left: 6px;
  padding-right: 8px;
}
```
