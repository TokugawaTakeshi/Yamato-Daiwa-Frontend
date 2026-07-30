# `deeplyCloneObject--YDF`: Creating the autonomous clone of the object (hash)

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-dco-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

As it in many other languages including JavaScript, `object1Clone = object1` will not create the independent copy of
`object1`.

```stylus
object1 = {
  alpha: {
    bravo: "FOO"
  }
}

object1Clone = object1
object1Clone.alpha.bravo = "BAR"

p(object1.alpha.bravo) // => "BAR"
```

The `object1.alpha.bravo` is `"BAR"` because `object1Clone` just refers to `object1`.
To create the autonomous copy of the object (hash), `@yamato-daiwa/frontend` suggests the `deeplyCloneObject--YDF`:


```stylus
object1Clone = deeplyCloneObject--YDF(object1)
object1Clone.alpha.bravo = "BAR"

p(object1.alpha.bravo) // => "FOO"
p(object1Clone.alpha.bravo) // => "BAR"
```
