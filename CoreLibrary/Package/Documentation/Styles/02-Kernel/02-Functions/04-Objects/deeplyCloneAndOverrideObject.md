# `deeplyCloneAndOverrideObject--YDF`: Deep cloning and overriding the object (hash)

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-dcaoo-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
deeplyCloneAndOverrideObject--YDF(targetObject: object, overridings: object): object 
```

The [`deeplyCloneObject--YDF`](deeplyCloneObject.md) allows to, obviously, deeply clone the object,
but usually no need to clone the object until modify it. Here, `deeplyCloneAndOverrideObject--YDF` allows immediately to modify
the cloned object.

Please note that if `targetObject` has `alpha: "FOO"` and `overridings` has `alpha: null` (explicit null), 
the result will be `alpha: null`.


```stylus
operand1 = {
  alpha: {
    bravo: "FOO",
    charlie: "BAR"
  }
}

operand2 = {
  alpha: {
    bravo: null,
    delta: "BAZ"
  },
  echo: "HOGE"
}

result = deeplyCloneAndOverrideObject--YDF(operand1, operand2)

p(operand1)
p(operand2)
p(result)

result.alpha.bravo = "FUGA"

p(operand1.alpha.bravo)
p(result.alpha.bravo)
```


## Vs. native `merge`/`extend`

The native `merge`/`extend` of two objects causes the mutation of the first one:

```stylus
sample1 = {
  foo: "foo"
  bar: "bar"
}

sample2 = {
  baz: "baz"
}

sample3 = merge(sample1, sample2)
p(sample3) // => {"foo":"(\"foo\")","bar":"(\"bar\")","baz":"(\"baz\")"} (As expected)
p(sample1) // => {"foo":"(\"foo\")","bar":"(\"bar\")","baz":"(\"baz\")"} (The sample1 has been mutated)
```

The `deeplyCloneAndOverrideObject--YDF`, as it obvious and must be obvious from the method name, does not touch the operands: 

```stylus

sample3 = deeplyCloneAndOverrideObject--YDF(sample1, sample2)

p(sample1) // => {"foo":"(\"foo\")","bar":"(\"bar\")"}
p(sample2) // => {"baz":"(\"baz\")"}
p(sample3) // => {"foo":"(\"foo\")","bar":"(\"bar\")","baz":"(\"baz\")"}
```
