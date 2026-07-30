# `iterateObjectSkippingNullValues` Iterate object (hash) skipping null values

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-iosnv-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
iterateObjectSkippingNullValues(targetObject: object, iterator: function): void
```

```stylus
sample = {
  themes: {
    redmond: {
      headerAndToolbars: { backgroundColor: "#817865" }
    }
    sunny: {
      headerAndToolbars: { backgroundColor: "#e9e9e9" }
    },
    overcast: null
  }
}
```

If to iterate `sample.themes` with regular `for/in` and access to `headerAndToolbars.backgroundColor` on each iteration,
on third iteration error will occur because third value is `null`

```stylus
for themeName, themeProperties in sample.themes

  p("Theme name: " + themeName)
  p("Header and toolbars background color: " + themeProperties.headerAndToolbars.backgroundColor)
```

```
themeProperties has no property .headerAndToolbars
```

If it's planning to support nullable values `iterateObjectSkippingNullValues` can care about `null` values skipping:

```stylus
iterateObjectSkippingNullValues(
  sample.themes,
  @(themeName, themeProperties) {

    p("Theme name: " + themeName)
    p("Header and toolbars background color: " + themeProperties.headerAndToolbars.backgroundColor)
  }
);
```

```
inspect: 'Theme name: redmond'
inspect: 'Header and toolbars background color: #817865'
inspect: 'Theme name: sunny'
inspect: 'Header and toolbars background color: #e9e9e9'
```
