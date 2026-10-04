# Positional relationship

Positional relationship allows to specify the distance between two specific elements.

The top and bottom margins of element such `h1`, `h2`, `p`, `ul` and so on are frequently being set
to fixed non-zero value, such as:

```stylus
p
  
  margin-top 8px
  margin-bottom 8px
```

It means that if not considering the margins collapsing, `p` will retire by `8px` from
any element, and push down any element to `8px`.

Unlike this, in **positional relationship approach** works selectively:

* The **external geometry** like margins are initially not defined
* The margins must be defined for each required combination of two element, but *only when necessary*. (Basically,
  `h1` should not go after `p`, so no need to define "`h1` after `p`" rule).

The native implementation of above approach is **descendant selectors**:

```stylus
.Article

  &-Heading2

    // ".Article-Heading2" styles ...

    
  &-Paragraph

    + .Article-Heading2

      margin-top 12px // ".Article-Paragraph" must retire from ".Article-Heading2" by 12px 
```

## Lookbehind reference principe

For good maintainability, **when define the space between two elements, refer to declared elements only**.

```stylus
.BadExample

  &-Heading2

    // The ".Article-Paragraph" has not been declared yet. Explain by the CSS what is the ".Article-Paragraph" first.  
    + .Article-Paragraph

      margin-top 12px
```

Above example is valid CSS; the problem is a maintainability only.
First, it's required to put in the maintainer's short-term memory what it `.Article-Paragraph` and then - how to position it.

```stylus
.GoodExample

  &-Heading2

    // ".GoodExample-Heading2" rules ...
  
    
  &-Paragraph

    // Retire from ".GoodExample-Heading2" from by 12px
    /.GoodExample-Heading2 + .GoodExample-Paragraph
    
      margin-top 12px

    // Push ".GoodExample-Heading2" from self by 24px
    +.GoodExample-Heading2

      margin-top 24px
```

Will be compiled to:

```css
.GoodExample-Heading2 + .GoodExample-Paragraph {
  margin-top: 12px;
}

.GoodExample-Paragraph +.GoodExample-Heading2 {
  margin-top: 24px;
}
```

Now how to get same output CSS with less code.


## `PositionalRelationship--YDF` mixin

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-prs-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Low-level mixin for the defining of the vertical space between two or more elements.


### Example for the case without combinators

```stylus
.Article1

  &-Heading

    // ".Article1-Heading" rules ...
  
  
  &-Paragraph

    PositionalRelationship--YDF({
      definitions: (".Article1-Heading" { retireFromIt: { y: 8px }, pushItFromSelf: { y: 16px } })
    })
```

will be compiled to:

```css
.Article1-Heading + .Article1-Paragraph {
  margin-top: 8px;
}

.Article1-Paragraph + .Article1-Heading {
  margin-top: 16px;
}
```


### Example for the case with combinators

If to leave the `PositionalRelationship--YDF` usage as in above example but for `.Article2 p` rule, 

```stylus
.Article2

  h2
  
    // ".Article2 h2" rules ... 
  
  
  p

    PositionalRelationship--YDF({
      definitions: ("h2" { retireFromIt: { y: 8px }, pushItFromSelf: { y: 16px } })
    })
```

The output CSS will be:

```css
h2 + .Article2 p {
  margin-top: 8px;
}

.Article2 p + h2 {
  margin-top: 16px;
}
```

The first rule does not match with desired because the `PositionalRelationship--YDF` can not know that
we want to define the positional relationship just inside `.Article2`. It can know only current selector
by `selector()` build-in function (in above example it is the `.Article2 p`). 

To fix it, it's required to explicitly specify the **context selector** and the selector for which we need to define
the positional relationship - the reference element:

```stylus
.Article2

  h2

    // ".Article2 h2" rules ...
  
  
  p

    PositionalRelationship--YDF({
      definitions: ("h2" { retireFromIt: { y: 8px }, pushItFromSelf: { y: 16px } }),
      contextSelector: ".Article2",
      referenceElementSelector: "p"
    })
```

Now the output CSS will match with desired:

```css
.Article2 h2 + p {
  margin-top: 8px;
}
.Article2 p + h2 {
  margin-top: 16px;
}
```


### Horizontal spacing

Specify `x` instead of `y` to set the horizontal spacing:

```css
.ExampleA-Element1 + .ExampleA-Element2 {
  margin-left: 2px;
}

.ExampleA-Element2 + .ExampleA-Element1 {
  margin-top: 4px;
}
```


### Multiple definitions at once

At in obvious and must be obvious from `definitions` property name, here could be the multiple definitions.

```stylus
.Article3

  &-Paragraph

    PositionalRelationship--YDF({
      definitions:\
          (".Article3-Heading" { retireFromIt: { y: 8px }, pushItFromSelf: { y: 16px } })\
          (".Article3-OrderedList" { retireFromIt: { y: 4px }, pushItFromSelf: { y: 8px } })
    })
```

Just be careful with Stylus syntax.

* To break the line, use the **backslash**.
* No spaces must be after backslash.
* **Do not** user the **backslash** after last definition.

If one of above rules violated, it will be the error which hard to locate.


### Using paddings instead of margins

Basically, the **paddings** is **not** the tool for defining the spacing between two elements (`margin` is).
However, there could be some exceptions, for example, creating of the styles for the email magazines.

The pseudo-elements as `:before` and `:anfter` could not be used because of email clients' security limitations.
Thus, if to use `MultilineTextWithoutExtraSpaceCausedByLineHeight`, `doNotUsePseudoElements` must be set to `true`.
Not the margins could not be used for the specifying of space between elements because margins are already being used
for the compensation of extra caused by `line-height`. If target element has not the background of borders, the paddings
could be used for defining of the vertical space between two elements - as exception for this case:

```stylus
.EmailMagazine

  &-Heading
  
    // ...

  
  &-Paragraph

    MultilineTextWithoutExtraSpaceCausedByLineHeight({ fontSize: 14px, lineHeight: 17px, doNotUsePseudoElements: true })

    PositionalRelationship--YDF({
      definitions:\
          (".EmailMagazine-Heading" { retireFromIt: { y: 8px }, pushItFromSelf: { y: 16px }, usePaddingsInsteadOfMargins: true })
    })

```

The output CSS without optimizations by PostCSS plugins will be:

```css
.EmailMagazine-Paragraph {
  font-size: 14px;
  line-height: 17px;
  word-break: break-all;
  margin-top: calc(-1 * calc((17px - 14px) / 2));
  margin-bottom: calc(-1 * calc((17px - 14px) / 2));
}

.EmailMagazine-Heading + .EmailMagazine-Paragraph {
  padding-top: 8px;
}

.EmailMagazine-Paragraph + .EmailMagazine-Heading {
  padding-top: 16px;
}
```


## `retireFrom--YDF` mixin
[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-rf-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The shorthand for `PositionalRelationship--YDF` indented to be used when `retiredFromIt` property only demanded (without `pushItFromSelf`). 

```stylus
.Example1

  &-ElementA
  
    // ...  
  
  
  &-ElementB

    retireFrom--YDF({ targetElementSelector: ".Example1-ElementA", x: 2px, y: 4px })
```

It is equivalent to:


```stylus
.Example1

  &-ElementA
  
    // ...  
  
  
  &-ElementB

    PositionalRelationship--YDF({
      definitions: (".Example1-ElementA" { retireFromIt: { x: 2px, y: 4px } })
    })
```


### Case with combinators

As in `PositionalRelationship--YDF`, the `referenceElementSelector` and `contextSelector` are required for scoped definition. 

```stylus
.Example2

  h1
  
    // ...
  
  p

    retireFrom--YDF({ 
      targetElementSelector: "h1", 
      y: 14px, 
      referenceElementSelector: "p", 
      contextSelector: ".Example2" 
    })
```


### Multiple definitions

If you want to specify multiple definitions at once, omit below properties:

* `targetElementSelector`
* `x`
* `y`
* `usePaddingsInsteadOfMargins`

and set `definitions` instead:


```stylus
.Example4

  h1
  
    // ...
  
  
  h2
  
    // ...
  
  
  p

    retireFrom--YDF({
      definitions: ("h1" { y: 12px }) ("h2" { y: 8px }),
      referenceElementSelector: "p",
      contextSelector: ".Example4"
    })
```


Be careful with row breaking to avoid the Stylus unclear errors:

* To break the line, use the backslash.
* No spaces must be after backslash.
* Do not user the backslash after last definition.

```stylus
.LongBlockName

  &-LongSelectorForRowBreakingTest1
  
    // ...
  
  
  &-LongSelectorForRowBreakingTest2
  
    // ...
  
  
  p

    retireFrom--YDF({
      definitions:\
          (".LongBlockName-LongSelectorForRowBreakingTest1" { y: 12px })\
          (".LongBlockName-LongSelectorForRowBreakingTest2" { y: 8px }),
      referenceElementSelector: "p",
      contextSelector: ".Example5"
    })

```

## `pushTargetFromSelf--YDF` mixin
[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-ptfs-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The shorthand for `PositionalRelationship--YDF` indented to be used when `pushItFromSelf` property only demanded (without `retiredFromIt`).

```stylus
.Example1

  &-ElementA

    // ...


  &-ElementB

    pushTargetFromSelf--YDF({ targetElementSelector: ".Example1-ElementA", y: 4px })
```

It is equivalent to:


```stylus
.Example1

  &-ElementA
  
    // ...  
  
  
  &-ElementB

    PositionalRelationship--YDF({
      definitions: (".Example1-ElementA" { pushItFromSelf: { y: 4px } })
    })
```


### Case with combinators

As in `PositionalRelationship--YDF`, the `referenceElementSelector` and `contextSelector` are required for scoped definition.

```stylus
.Example2

  h2

    // ...


  p

    pushTargetFromSelf--YDF({
      targetElementSelector: "h2",
      y: 24px,
      referenceElementSelector: "p",
      contextSelector: ".Example2"
    })
```

### Multiple definitions

If you want to specify multiple definitions at once, omit below properties:

* `targetElementSelector`
* `x`
* `y`
* `usePaddingsInsteadOfMargins`

and set `definitions` instead:

```stylus
.Example3

  &-ElementA

    // ...


  &-ElementB

    // ...


  &-ElementC

    pushTargetFromSelf--YDF({
      definitions:\
        (".Example3-ElementA" { x: 2px, y: 4px })\
        (".Example3-ElementB" { x: 6px, y: 8px, usePaddingsInsteadOfMargins: true })
    })
```

Be careful with row breaking to avoid the Stylus unclear errors:

* To break the line, use the backslash.
* No spaces must be after backslash.
* Do not user the backslash after last definition.


## `retireFromElementWithSameSelector--YDF` mixin
[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-rfewss-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Define how much element with certain selector must retire from other element with same selector.
The same effect as `retireFrom--YDF` when `targetElementSelector` is even with `referenceElementSelector`.

```stylus
.Block

  &-ElementA

    retireFromElementWithSameSelector--YDF({ x: 2px, y: 4px })
```

will be compiled to:


```css
.Block-ElementA + .Block-ElementA {
  margin-left: 2px;
  margin-top: 4px;
}
```

If above definition must be actual for certain context, use `contextSelector` and `referenceElementSelector`:

```stylus
.Block

  ul

    li

      retireFromElementWithSameSelector--YDF({ y: 8px, contextSelector: ".Block ul", referenceElementSelector: "li" })
```

will be compiled to:

```css
.Block ul li + li {
  margin-top: 8px;
}
```


## Applying of arbitrary CSS properties depending on position in order

### `whenItGoingFirst--YDF` mixin
[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-wigf-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Allows to define `margin-top` and other properties for the case when target element going first in container.

Below example:

```stylus
.Child
  
  whenItGoingFirst--YDF({ verticalSpaceAbove: 4px })
```

will be compiled to:

```css
.Child:first-child {
  border-top: 1px solid #808080;
}
```

Note that it may not work because of [margin collapse](https://www.w3schools.com/css/css_margin_collapse.asp),
but this problem is solvable (for example by flexbox with `flex-direction: column`).


You can specify any other CSS properties as content of the [block mixin](https://www.w3schools.com/css/css_margin_collapse.asp),
just don't forget to append `+` to `whenItGoingFirst--YDF()`: 


```stylus
+whenItGoingFirst--YDF()

  border-top 1px solid gray
```


### `whenItGoingLast--YDF` mixin
[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-wigl-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Allows to define `margin-bottom` and other properties for the case when target element going last in container.

Below example:

```stylus
.Child

  whenItGoingLast--YDF({ verticalSpaceBelow: 4px })
```

will be compiled to:


```css
.Test3:last-child {
  margin-bottom: 4px;
}
```


You can specify any other CSS properties as content of the [block mixin](https://www.w3schools.com/css/css_margin_collapse.asp),
just don't forget to append `+` to `whenItGoingFirst--YDF()`: 


```stylus
+whenItGoingLast--YDF({ verticalSpaceBelow: 36px })

  border-bottom 2px solid gray
```


The frequent use case is the list-like view with the pagination: because pagination usually not displaying when pages
count is only 1, it's required to consider the case when the list view going last:


```stylus
.UsersListPage

  &-CardsFlow

    whenItGoingLast--YDF({ verticalSpaceBelow: 32px })


  &-Pagination

    retireFrom--YDF({ targetElementSelector: ".UsersListPage-CardsFlow", y: 12px })

    whenItGoingLast--YDF({ verticalSpaceBelow: 28px })
```


### `whenItJustAfter--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-wija-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Allows to specify any CSS properties for element `B` when it is going after element `A`.
In contrast to this `retireFrom--YDF` mixin allows to specfiy `margin-top` (or `padding-top`) only.


```stylus
.Block1

  &-ChildA1

    // ...


  &-ChildA2

    // ...


  &-ChildB

    +whenItJustAfter--YDF({ targetElementSelector: ".Block-ChildA1" })

      background gold
```

Will be compiled to:

```css
.Block-ChildA1 + .Block1-ChildB {
  background: #ffd700;
}
```


For the scoping, define `contextSelector` and `referenceElementSelector` explicitly:

```stylus
.Block2

  h2

    // ...


  p

    +whenItJustAfter--YDF({ targetElementSelector: "h2", contextSelector: ".Block2", referenceElementSelector: "p" })

      background silver
```

Above example will be compiled to:

```css
.Block2 h2 + p {
  background: #c0c0c0;
}
```


### `whenTargetGoingJustAfterIt--YDF` 

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-wtgjai-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Allows to specify any CSS properties for the target element `X` when it is going after currently being declared element.

```stylus
.Block1

  &-ChildA

    // ...


  &-ChildB

    +whenTargetGoingJustAfterIt--YDF({ targetElementSelector: ".Block-ChildA" })

      background gold
```

Above example will be compiled to:

```css
.Block1-ChildB + .Block-ChildA {
  background: #ffd700;
}
```


For the scoping, define `contextSelector` and `referenceElementSelector` explicitly:

```stylus
.Block2

  h2

    // ...


  p

    +whenTargetGoingJustAfterIt--YDF({ targetElementSelector: "h2", contextSelector: ".Block2", referenceElementSelector: "p" })

      background silver
```

Above example will be compiled to:

```css
.Block2 p + h2 {
  background: #c0c0c0;
}
```


### `whenTargetWithSameSelectorGoingJustAfterIt--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-wtwssgjat-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The equivalent of `+whenTargetGoingJustAfterIt--YDF({ targetElementSelector: ".X" })` for the case when reference element's
selector is also `.X`.

```stylus
.Block

  &-ElementA

    +whenTargetWithSameSelectorGoingJustAfterIt--YDF()

      background goldenrod
```

Above example will be compiled to:

```css
.Block-ElementA + .Block-ElementA {
  background: #daa520;
}
```

For the scoping, define `referenceElementSelector` and `contextSelector` explicitly:

```stylus
.Block

  p

    +whenTargetWithSameSelectorGoingJustAfterIt--YDF({ referenceElementSelector: "p", contextSelector: ".Block" })

      border-top 1px solid black
```

Above example will be compiled to:

```css
.Block p + p {
  border-top: 1px solid #000;
}
```
