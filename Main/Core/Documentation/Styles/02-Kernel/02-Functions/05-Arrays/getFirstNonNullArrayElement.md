# getFirstNonNullArrayElement--YDF: Retrieving of first non-null element of array

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-getFirstNonNullArrayElement-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Returns first non-null element of array or null if no such elements.


```stylus
sample1 = null null "ALPHA" null "BRAVO"
p(getFirstNonNullArrayElement--YDF(sample1)); // => "ALPHA"

sample2 = null null null
p(getFirstNonNullArrayElement--YDF(sample2)); // => null
```
