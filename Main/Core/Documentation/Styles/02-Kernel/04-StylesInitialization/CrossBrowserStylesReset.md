# `CrossBrowserStylesReset--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-si-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The resetting of browser dependent styles and some usually redefinable styles like default margins of `body` based on
[Eric Mayer's **Reset CSS**](https://meyerweb.com/eric/tools/css/reset/).


## Differences with original Reset CSS

### No `font-size: 100%` in first ruleset

In the original version, both `font: inherit;` and `font-size: 100%;`specified. Maybe `font-size: 100%` is for Internet 
Explorer 7 which does not support `font: inherit`. However, this version of Internet Explorer does not left even on 
Windows XP (v. 9 is available for Windows XP).


### No `content: none` for the blockquote

In the original version, both `content: '';` and `content: none;` has been defined for the `before` and `after` 
pseudo-elements of `blockquote` and `q` elements. However, the `'''` is enough for both modern and old browsers.


### Resetting of anchor styles

The anchor is frequently being used as wrapper. Also, the text links are being styled according design.
So, we don't need the default styles of anchor.  

```stylus
text-decoration none
color #000
outline none
```

### Other

* Normal font weight for `th`
* No outline for `input`, `select`, `textarea`, `button` elements.
* No box-shadow not `input` (was in old Firefox)
* Zero-width borders and no margins for `hr`.
