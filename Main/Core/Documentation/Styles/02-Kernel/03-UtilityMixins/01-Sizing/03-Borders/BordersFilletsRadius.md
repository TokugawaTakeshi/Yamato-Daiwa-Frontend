# Border fillets radius

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-bfr-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Four mixin for defining of borders fillets radius.

```stylus
.BordersFilletsRadius

  &-Top

    BorderTopFilletsRadius--YDF(2px)


  &-Bottom

    BorderBottomFilletsRadius--YDF(3px)


  &-Left

    BorderLeftFilletsRadius--YDF(4px)


  &-Right

    BorderRightFilletsRadius--YDF(5px)
```

will output:

```css
.BordersFilletsRadius-Top {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.BordersFilletsRadius-Bottom {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.BordersFilletsRadius-Left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.BordersFilletsRadius-Right {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
```
