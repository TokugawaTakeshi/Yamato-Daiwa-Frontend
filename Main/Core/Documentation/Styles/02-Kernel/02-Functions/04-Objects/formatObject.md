# `formatObject`: object formatting

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-fo-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Formats object which will be outputted in console.

The Stylus build-in function `p()` do not any formatting:

```stylus
p({
  alpha: "ALPHA",
  bravo: "BRAVO",
  charlie: {
    charlie1: "CHARLIE_1",
    charlie2: "CHARLIE_1"
  }
})
```

```
inspect: {"alpha":"(\"ALPHA\")","bravo":"(\"BRAVO\")","charlie":"({\"charlie1\":\"(\\\"CHARLIE_1\\\")\",\"charlie2\":\"(\\\"CHARLIE_1\\\")\"})"}
```

While the **formatObject** function usage

```stylus
p(formatObject({
  alpha: "ALPHA",
  bravo: "BRAVO",
  charlie: {
    charlie1: "CHARLIE_1",
    charlie2: "CHARLIE_1"
  }
}))
```

will format the output:

```
inspect: '{      
  alpha: 'ALPHA',
  bravo: 'BRAVO',
  charlie: {
    charlie1: 'CHARLIE_1',
    charlie2: 'CHARLIE_1'
  }
}'
```

* If you are using the function `log--YDF()` (also provided by **@yamato-daiwa/frontend**), you don't need
**formatObject** because **log--YDF** using **formatObject** is passed parameter is the object.
* If the passed parameter is not and object, `formatObject` will return this parameter as is and emit the warning
