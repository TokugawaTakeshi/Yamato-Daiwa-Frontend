# `overrideObject`: Override object

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-oo-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
overrideObject(targetObject: DataTypes--YDF.object, overridings: DataTypes--YDF.object)
```

Overrides object herewith unlike native **merge**/**extend** works correctly with nested objects.

Note that first operand will mutate as result of this operation.
If the mutating of the first operator is unsolicited, use [deeplyCloneAndOverrideObject--YDF](deeplyCloneAndOverrideObject.md)
function instead.


## Vs. native `merge`/`extend`

Consider below example:

```stylus
sample1 = {
  alpha: "FOO",
  charlie: {
    delta: "BAR"
  }
}

overridings1 = {
  alpha: null,
  bravo: "BAZ"
}

mergingResult1 = merge(sample1, overridings1)
```

The **sample1** will mutate:

```
{
  alpha: null,
  charlie: {
    delta: "BAR"
  },
  bravo: "BAZ"
}
```

The **sample1** will mutate, while **overridings1** - not, thus **mergingResult1** will be even with **sample1**.
In this case, the **overrideObject** will give same result as native **merge**/**extend**.

Next, consider below example:

```stylus
sample2 = {
  alpha: {
    bravo: "FOO",
    charlie: {
      delta: "BAR",
      golf: "BAZ"
    }
  }
}

overridings2 = {
  alpha: {
    bravo: "HOGE"
  }
}

mergingResult2 = merge(sample2, overridings2)
```

As result, all of **sample2**, **overridings2**, **mergingResult2** will be

```
alpha: {
  bravo: "HOGE"
}
```

while

```
{
  alpha: {
    bravo: "HOGE",
    charlie: {
      delta: "BAR",
      golf: "BAZ"
    }
  }
}
```

result expected from the viewpoint of the logic. Replacing of `mergingResult2 = merge(sample2, overridings2)` with
`mergingResult2 = overrideObject(sample2, overridings2)` will give this logical result.
