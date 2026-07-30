# `iterate2DimensionalArray--YDF`: Iterates 2-dimensional array

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-iterate2DimensionalArray-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Iterates the array consisting of nested arrays with arbitrary elements count.
Has the same effect as `for element, index in targetArray` until elements count became 1.

```stylus
sample1 = (11 "ALPHA" true { hash: 1 }) ("BRAVO" 22 false)

iterate2DimensionalArray--YDF(sample1, @(nestedArray, index){
  p("Element No. " + index + ":")
  p(nestedArray)
})
```

Output: 

```
'Element No. 0:'
11 "ALPHA" true {"hash":"(1)"}
'Element No. 1:'
"BRAVO" 22 false
```

## Single-element arrays support

Regular `for/in` iteration:

```stylus
sample2 = (11 "ALPHA" true { hash: 1 })

for nestedArray, index in sample1
  
  p("Element No. " + index + ":")
  p(nestedArray)
```

As it can be seen on the output Stylus iterated one-dimensional array `11 "一" true { hash: 1 }` instead on two-dimensional
array with single element `(11 "一" true { hash: 1 })`.

```
'Element No. 0:'
11
'Element No. 1:'
"ALPHA"
'Element No. 2:'
true
'Element No. 3:'
{"hash":"(1)"}
```

Because `iterate2DimensionalArray--YDF` assumes that the argument is always the 2-dimensional array, it will be only one
iteration for single-element array:

```stylus
sample2 = (11 "ALPHA" true { hash: 1 })

iterate2DimensionalArray--YDF(sample2, @(nestedArray, index){
  p("Element No. " + index + ":")
  p(nestedArray)
})
```

Output:

```
'Element No. 0:'
inspect: 11 "ALPHA" true {"hash":"(1)"}
```
