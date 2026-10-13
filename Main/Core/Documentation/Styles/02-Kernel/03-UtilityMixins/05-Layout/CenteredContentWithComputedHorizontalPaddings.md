# `CenteredContentWithComputedHorizontalPaddings--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-ccwchp-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
CenteredContentWithComputedHorizontalPaddings--YDF({
  contentWidth: DataTypes--YDF.unit
})
```

Centering of the element by computed horizontal symmetric paddings. 
Intended to be used on the page containers on wide screens.


## Problem overview

In responsive/adaptive design, as the viewport's width increasing, when reach the maximal grid's width, the content
is frequently been centered. The popular implementation is adding of centering element inside the main page container:

```html
<div class="page">
  <div class="page-centerer"></div>
</div>
```

```stylus
.page
  
  background #ecf0f1
  

  &-centerer

    min-width 320px
    max-width 960px
    width 100%          /* Always take as much horizontal space as possible */
    
    margin-left auto    /* Center horizontally */
    margin-right auto   /* Center horizontally */
```

This solution is completely valid, but actually we don't need the centerer until the viewport width is less than `960px`
(for above example). Can we merge `.page` and `.page-centerer` to single element, but keep the centering on viewport width
`960px` and wider? Yes. 

```stylus
.page

  MAXIMAL_CONTENT_WIDTH = 960px
  MEDIUM_SCREENS_CONFIGURATION_MINIMAL_WIDTH = 640px

  WideScreensConfiguration()
    @media screen and (min-width: MAXIMAL_CONTENT_WIDTH)
      {block}

  MediumScreensConfiguration()
    @media screen and (min-width: MEDIUM_SCREENS_CONFIGURATION_MINIMAL_WIDTH) and (max-width: MAXIMAL_CONTENT_WIDTH - 1)
      {block}

  NarrowScreensConfiguration()
    @media screen and (max-width: MEDIUM_SCREENS_CONFIGURATION_MINIMAL_WIDTH - 1)
      {block}

  
  background #ecf0f1

  
  +WideScreensConfiguration()

    padding-left "calc(0.5*(100% - %s))" % CONTENT_WIDTH
    padding-right "calc(0.5*(100% - %s))" % CONTENT_WIDTH
```

The `CenteredContentWithComputedHorizontalPaddings--YDF` will take care about above computing:

```stylus
.page

  // ...
  +WideScreensConfiguration()

    CenteredContentWithComputedHorizontalPaddings--YDF({ contentWidth: MAXIMAL_CONTENT_WIDTH })
```


## Usage

In addition to above example, basically we want to add the side paddings to container.
Once use `CenteredContentWithComputedHorizontalPaddings--YDF`, as it following from the mixin name, side padding will
be used to center the content and it's value is dynamic. By other words:

* Until maximal grid width reached, the content width is dynamic but paddings are static (however, the relative units like
  `%` could be used).
* Once maximal grid width reached, the content width become static while paddings becomes dynamic.

But how to compute this breakpoint?

1. Decide the maximal content width (designated as `MAXIMAL_CONTENT_WIDTH` in below example)
2. Decide the minimal side paddings on wide screens (designated as `MINIMAL_SIDE_SYMMETRIC_PADDINGS__WIDE_SCREENS` in below example)
3. The breakpoint will be the sum of `MAXIMAL_CONTENT_WIDTH` and doubled `MINIMAL_SIDE_SYMMETRIC_PADDINGS__WIDE_SCREENS`.

You may want to define more phases, therefore, breakpoints. In below example `NarrowScreensConfiguration` also has been
added.

```stylus
.TopPage

  MAXIMAL_CONTENT_WIDTH = 1200px
  MINIMAL_SIDE_SYMMETRIC_PADDINGS__WIDE_SCREENS = 20px
  
  wideScreensConfigurationMinimalWidth = MAXIMAL_CONTENT_WIDTH + 2*MINIMAL_SIDE_SYMMETRIC_PADDINGS__WIDE_SCREENS
  MEDIUM_SCREENS_CONFIGURATION_MINIMAL_WIDTH = 420px
  
  
  WideScreensConfiguration()
    @media screen and (min-width: wideScreensConfigurationMinimalWidth)
      {block}
  
  MediumScreensConfiguration()
    @media screen and (min-width: MEDIUM_SCREENS_CONFIGURATION_MINIMAL_WIDTH) and (max-width: wideScreensConfigurationMinimalWidth - 1)
      {block}
  
  NarrowScreensConfiguration()
    @media screen and (max-width: MEDIUM_SCREENS_CONFIGURATION_MINIMAL_WIDTH - 1)
      {block}
  
  
  +WideScreensConfiguration()

    // Fixed content width, dynamic paddings
    CenteredContentWithComputedHorizontalPaddings--YDF({ contentWidth: MAXIMAL_CONTENT_WIDTH })
  
  
  +MediumScreensConfiguration()

    // Fixed paddings, dynamic content width
    Paddings--YDF({ horizontalSymmetric: 20px })
  
  
  +NarrowScreensConfiguration()

    // One more phase for example
    Paddings--YDF({ horizontalSymmetric: 12px })
```

You can input this example in one second with <kbd>med-3c</kbd> live template of official plugin for IntelliJ IDEA-family IDEs.
Also, you can use again `WideScreensConfiguration` by <kbd>wsc</kbd>, `MediumScreensConfiguration` by <kbd>msc</kbd> and
`NarrowScreensConfiguration` by <kbd>nsc</kbd>.
