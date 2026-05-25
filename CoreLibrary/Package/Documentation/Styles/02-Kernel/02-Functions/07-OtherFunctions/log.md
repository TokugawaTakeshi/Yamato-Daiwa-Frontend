# `log--YDF`: improved logging

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-log-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Outputs the log to consoles. Using `formatObject` function, formats the objects (including nested objects case).


```stylus
sample1 = {
  alpha: "FOO",
  bravo: 1,
  charlie: {
    delta: "BAR",
    echo: 2
  }
}

// Native logging
p(sample1)
// => {"alpha":"(\"FOO\")","bravo":"(1)","charlie":"({\"delta\":\"(\\\"BAR\\\")\",\"echo\":\"(2)\"})"}
```

The `log--YDF(sample1)` gives the output:

```
{
  alpha: FOO,
  bravo: 1,
  charlie: {
    delta: BAR,
    echo: 2
  }
}
```
