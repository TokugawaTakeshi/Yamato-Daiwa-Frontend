# `getObjectNonNullValuesCount` Retrieving the count of non-null object values

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-gnnovc-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)


```
getObjectNonNullValuesCount(targetObject: object): number
```

```stylus
sample = {
  themes: {
    redmond: {}
    sunny: null
  }
}


p(getObjectNonNullValuesCount(sample)) // => 1
p(length(values(sample))) // => 2
```
