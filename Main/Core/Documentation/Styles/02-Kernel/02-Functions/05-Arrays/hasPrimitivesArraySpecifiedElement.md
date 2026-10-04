# `hasPrimitivesArraySpecifiedElement--YDF` Has the array of strings/numbers/booleans specified element

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-hasPrimitivesArraySpecifiedElement-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
hasPrimitivesArraySpecifiedElement--YDF(targetArray: Array<string | number | boolean>, targetElement: string | number | boolean): boolean
```

```stylus
sample1 = "ALPHA" "BRAVO" "CHARLIE"
hasPrimitivesArraySpecifiedElement--YDF(sample1, "BRAVO") // => true
hasPrimitivesArraySpecifiedElement--YDF(sample1, "DELTA") // => false


// Single-element arrays support
sample2 = "ALPHA"
hasPrimitivesArraySpecifiedElement--YDF(sample2, "ALPHA") // => true
hasPrimitivesArraySpecifiedElement--YDF(sample2, "BRAVO") // => false
```
