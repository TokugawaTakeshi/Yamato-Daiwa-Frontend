# `getObjectValueByDotSeparatedPathSafely` Safe access to nested objects (hashes) which could not be

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-govbdsps-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
getObjectValueByDotSeparatedPathSafely(targetObject: object, dotSeparatedPath: string): unknown
```

```stylus
sample = {
  alpha: "FOO",
  bravo: {
    charlie: "BAR"
  }
}

p(sample.bravo.delta.golf)
```

It will be error similar to JavaScript's `TypeError: Cannot read property 'XXX' of undefined` because
nested object `bravo` has not child object `delta`:

```
sample.bravo.delta has no property .golf
```

However what if it's unknown at advance will `bravo` nested object or no?
The specialized solution suggested by `@yamato-daiwa/frontend` is `getObjectValueByDotSeparatedPathSafely`:

```
p(getObjectValueByDotSeparatedPathSafely(sample, "bravo.delta.golf")) // => null
```

When some nested object does not exist, `null` will be returned instead.
