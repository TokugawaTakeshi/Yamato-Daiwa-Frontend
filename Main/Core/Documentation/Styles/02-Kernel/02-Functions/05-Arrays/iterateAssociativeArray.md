# `iterateAssociativeArray--YDF`: Iterating of associative array 

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-iterateAssociativeArray-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The value like `(".Selector1" {  alpha: 1, bravo: "FOO" }) (".Selector2" {  alpha: 2, bravo: "BAR" })` is close
to [**Associative array** AKA **Map**](https://en.wikipedia.org/wiki/Associative_array) by conception. 
Please note that in this case any valid data type could be in the `key` position while sometimes it is assumed that
only string could be the key.


```stylus
sample1 = (".Selector1" {  alpha: 1, bravo: "FOO" }) (".Selector2" {  alpha: 2, bravo: "BAR" })

iterateAssociativeArray--YDF(sample1, @(key, value) {
  p("Key: " + key);
  p("Value: " + value)
})
```

Output:

```
'Key: .Selector1'
'Value: {"alpha":"(1)","bravo":"(\"FOO\")"}'
'Key: .Selector2'
'Value: {"alpha":"(2)","bravo":"(\"BAR\")"}'
```

Compare it with plain `for/in` iteration:


```stylus
for value, key in sample1

  p("Key: " + key);
  p("Value: " + value)
```

Output:

```
'Key: 0'
'Value: .Selector1 {"alpha":"(1)","bravo":"(\"FOO\")"}'
'Key: 1'
'Value: .Selector2 {"alpha":"(2)","bravo":"(\"BAR\")"}'
```

`iterateAssociativeArray--YDF` support the single-entire case:

```stylus
sample2 = (".Selector1" {  alpha: 1, bravo: "FOO" })

iterateAssociativeArray--YDF(sample2, @(key, value) {
  p("Key: " + key);
  p("Value: " + value)
})
```

Output:

```
'Key: .Selector1'
'Value: {"alpha":"(1)","bravo":"(\"FOO\")"}'
```
