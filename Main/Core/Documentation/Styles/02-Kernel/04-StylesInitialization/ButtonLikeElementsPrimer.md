# ButtonLikeElementsPrimer--YDF

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-blep-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Resets all styles which usually pre-defined on buttons and similar elements by browser such as the target element becomes even
with unstyled `span`.

```stylus
.CustomButton

  ButtonLikeElementsPrimer--YDF()

  // Now you can style your button from zero like span
```


## Implementation

```stylus
ButtonLikeElementsPrimer--YDF()

  padding 0
  border none
  border-radius 0
  font-family inherit
  font-size 14px
  line-height 1

  text-decoration none  // For links
  background none
```


## What means "Primer" in this context?

It just means "apply `ButtonLikeElementsPrimer--YDF` before style your buttons according design".
The "primer" metaphor refers to the painting of the metal, three etc. products where before colour layer covering it is 
recommended to cover with special undercoating for corrosion resistance, paint durability and other protections.
