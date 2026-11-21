# `applyIfNotNull--YDF`: applying the nullable CSS properties

[![Official IntelliJ IDEA plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-ainn-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Adds each specified CSS property to target ruleset when if it's not null. Intended to be used in
cases when CSS values are unknown in advance (actual for the frameworks development).


## Example

Assume that the background color and font color are unknown in advance and could be `null`.

```stylus
background__assumeThatUnknownAtAdvance = red
fontColor__assumeThatUnknownAtAdvance = null


.Example

  background background__assumeThatUnknownAtAdvance
  color fontColor__assumeThatUnknownAtAdvance
```

The output will be an invalid CSS:

```css
.Example {
  background: #f00;
  color: ;
}
```

The `applyIfNotNull--YDF` has been designed to solve this problem:

```stylus

.Example

  applyIfNotNull--YDF({
    background: background__assumeThatUnknownAtAdvance,
    color: fontColor__assumeThatUnknownAtAdvance
  })
```

Output: 

```stylus
.Example {
  background: #f00;
}
```

Please note that the keys must be the valid CSS key.

```stylus
.Example

  // ⇩ Right
  applyIfNotNull--YDF({ line-height: 1 })

  // ⇩ Wrong: the `lineHeight` is not a valid CSS key
  applyIfNotNull--YDF({ lineHeight: 1 })
```
