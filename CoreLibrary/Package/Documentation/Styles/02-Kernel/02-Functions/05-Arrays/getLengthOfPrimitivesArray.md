# `getLengthOfPrimitivesArray--YDF` Get the length (elements count) of strings, numbers or booleans

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-getLengthOfPrimitivesArray-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
getLengthOfPrimitivesArray--YDF(targetValue: Array<string | number | boolean>): number
```

```stylus
sample = "ALPHA"

p(length(sample)); // => 5 (For V0.54.8)
p(getLengthOfPrimitivesArray--YDF(sample)); // => 1

sample2 = "ALPHA" "BRAVO"

p(length(sample2)); // => 2 (For V0.54.8)
p(getLengthOfPrimitivesArray--YDF(sample2)); // => 2
```

This function may work with array of other values, but it has not been tested.


## Problem

There are no mentions of array literal in Stylus similar to `[]` in C-like languages has been found in the
documentation (please let to know if it has been added).
The question [Array of one element in Stylus](https://stackoverflow.com/questions/62357697/array-of-one-element-in-stylus)
had no any answers (last check: 26 June 2021).

Basically, the space-separated values are being detected as array in stylus

```stylus
sample = "ALPHA" "BRAVO" "CHARLIE"
p(length(sample)) // => 3
```

However, the elements count in array could be unknown at advance including one element case.
What if to try to get the `length` of one-element array, the result be... depend on environment.

For the `stylus@0.54.8`, the length of below sample will be `5`. 
It is the length on string value, because the Stylus did not recognise is as one-element array.

```stylus
sample = "ALPHA"

p(length(sample)); // => 5 (For V0.54.8)
```

But the results of same experiment in [Stylus fiddle](https://stylus-lang.com/) was different.
For the 26 June 2021, the output was `1`.
It means the fiddle submits the code to the server width other version of Stylus, where `length` is intended for arrays only.
If nothing changed, it's possible to check the result in browser console.

[Stylus fiddle with above example](https://stylus-lang.com/try.html#?code=isNull(value)%0A%0A%20%20return%20value%20%3D%3D%20null%20%26%26%20typeof(value)%20!%3D%20%22call%22%0A%0A%0A%0AgetLengthOfPrimitivesArray(targetArray)%0A%0A%20%20return%20targetArray%5B0%5D%20%3D%3D%20targetArray%20%26%26%20isNull(targetArray%5B1%5D)%20%3F%201%20%3A%20length(targetArray)%0A%0Asample%20%3D%20%22ALPHA%22%0A%0Ap(length(sample))%3B)
