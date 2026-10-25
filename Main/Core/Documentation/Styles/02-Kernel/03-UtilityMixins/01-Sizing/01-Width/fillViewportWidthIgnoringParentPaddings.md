# fillViewportWidthIgnoringParentPaddings--YDF: filling the viewport width ignoring parent's paddings

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-fillViewportWidthIgnoringParentPaddings-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Make element fill the viewport's width ignoring parent's side paddings.


## Main use case

The tabs on narrow screens taking full viewport width is preferred by many designers pattern:

![](fillViewportWidthIgnoringParentPaddings-Illustration.png)

```stylus
.PageContent

  padding 24px 20px 64px


  &-Tabs

    fillViewportWidthIgnoringParentPaddings--YDF()
```

## Limitation

The limitation is following from **vw** units which does not respect the vertical scrollbar.
What we actually need is take 100% of space between left edge of viewport and right scrollbar, but the right scrollbar
could be included to **100vw** width depending on specific device/browser.

A lot of solutions has been suggested in 
[Fill 100% of viewport with ignoring parent's side paddings but respecting the vertical scrollbar](https://stackoverflow.com/q/69459441/4818123)
topics, but there is no universal clear one which means the CSS fundamental defect.
