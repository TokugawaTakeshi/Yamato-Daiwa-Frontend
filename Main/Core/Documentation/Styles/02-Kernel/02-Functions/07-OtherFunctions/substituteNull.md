# substituteNull--YDF - substituting of null value 

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-sn-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
substituteNull--YDF<NonNullable>(targetValue: NonNullable | null, defaultValue: NonNullable): NonNullable
```

Substitutes the second parameter `defaultValue` when the first parameter `targetValue` is explicit null or not defined
variable. Similar to [nullish coalescing in ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).
by concept.

```stylus
sample1 = "ALPHA"
sample2 = null

p(substituteNull--YDF(sample1, "BRAVO"))  // => "ALPHA" ("sample1" is defined, no need to substitute the default value)
p(substituteNull--YDF(sample2, "BRAVO"))  // => "BRAVO" ("sample2" is explicit null, default value has been substituted)
p(substituteNull--YDF(sample3, "BRAVO"))  // => "BRAVO" ("sample3" is not defined, default value has been substituted)
```
