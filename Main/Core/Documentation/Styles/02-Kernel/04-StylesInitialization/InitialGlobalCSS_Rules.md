# `InitialGlobalCSS_Rules--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-si-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Some basic CSS rules like default font size and default line height intended to be applying directly after
`CrossBrowserStylesReset--YDF`. 


## What this mixin exactly does

### `box-sizing: border-box`

Although defining of content width/height, paddings and margins separately is more clear, in most cases the width including
paddings (`box-sizing: border-box`) is more relevant. 


### 100% height for `html` and `body`

Requires to adjust the height of `body`'s children containers' height to `100%`.
You still can make `body` or it's children scrollable or non-scrollable.

Be aware that `vh` and `vw` are problematic units because the are does not respect the features of some mobile devices's
screens and scrollbars on desktop devices, so the `100%` for `html` and `body` are required for adjusting of the
children containers without `vh` and `vw`. 


### Defaults for `html` tag

Applying the `MAIN_FONT_STACK`, `BASIC_FONT_SIZE` and `BASIC_LINE_HEIGHT` variables to `html`.
Once it done, you can use `rem` units and convert them to other units if required.

```stylus
html

  font-family MAIN_FONT_STACK
  font-size BASIC_FONT_SIZE
  line-height BASIC_LINE_HEIGHT
```


### Initial styles for `sub` and `sup`

After the styles of `sub` and `sup` has been reset by `CrossBrowserStylesReset--YDF`, it should be setup such as `sub` and
`sup` looks like `sub` and `sup`. 

```stylus
sub

  margin-left 1px
  vertical-align sub
  font-size 10px


sup

  margin-left 1px
  vertical-align super
  font-size 10px
```
