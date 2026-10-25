# `buildCalcExpression--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-bce-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
buildCalcExpression--YDF(formula: string, variables: { [variableName: string]: value }): CSS_Function
```

Generates [`calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc()) expression; interpolation
is available.


```stylus
.Example

  width: buildCalcExpression--YDF("${a} - ${b}", { a: 100%, b: 30px })
```

Output:

```css
.Example {
  width: calc(100% - 30px);
}
```

Note that colon after CSS property name is required otherwise below Stylus error will occur.

```
ParseError: Tests/Styles/02-Kernel/02-Functions/07-OtherFunctions/buildCalcExpression--YDF.test.styl:12:1
    8|
    9| .Example
   10|
   11|   width buildCalcExpression--YDF("${a} - ${b}", { a: 100%, b: 30px })
   12|
-------^

expected "indent", got "outdent"
```

## `calc` interpolation in Stylus

The native interpolation approach of `calc` expression is [`sprintf`](https://stylus-lang.com/docs/operators.html#sprintf):

```stylus
.Example

  a = 100%
  b = 30px

  width "calc(%s - %s)" % (a b)
```

If you are satisfied with this approach, you don't need `buildCalcExpression--YDF`, but the expression such this could have
poor readability with multiple variables and complicated arithmetics.
